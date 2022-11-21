---
title: Pipeline Configuration
sidebar_position: 5
---

# Components

Componets make up the NLU pipeline and is used to sequentially process user input into structured output. There are components for intent classification, entity extraction, pre-processing, response selection, and more.

## Tokenizers

Tokenizers split text into tokens. If you want to split intents into multiple labels, e.g. for predicting multiple intents or for modeling hierarchical intent structure, we can use the following flags with any tokenizer:

- `intent_tokenization_flag` indicates whether to tokenize intent labels or not. Set it to `True`, if you want the intent labels to be tokenized.
- `intent_split_symbol` sets the delimiter string to split the intent labels, the default is underscore (`_`).

<!-- ### SEETMTokenier

- ### Short

  [Token mapping](token-mapping) is performed before the tokenization step

- ### Outputs

  `tokens` for user messages, responses (if present), and intents (if specified)

- ### Requires

  Nothing

- ### Description

  Effective when token mapping has been selected in the kolloqe UI. Works for Sinhala as well as English. If there are no token mappings defined then works as white space:


- ### Configuration

  - `"Intent Tokenization Flag"`: Flag used to check whether to split intents
  - `"Intent Split Symbol"`: The symbol on which the intent should be split
  - `"Token Pattern"`: The regular expression to detect tokens -->

### WhitespaceTokenier

- ### Short

  Tokenizer that uses whitespaces as a separator

- ### Outputs

  `tokens` for user messages, responses (if present), and intents (if specified)

- ### Requires

  Nothing

- ### Description

  Creates a token for every whitespace separated character sequence.

  Any character not in: `a-zA-Z0-9_#@&` will be substituted with whitespace before splitting on whitespace if the character fulfills any of the following conditions:

  - the character follows a whitespace: `" !word"` → `"word"`
  - the character precedes a whitespace: `"word!` " → `"word"`
  - the character is at the beginning of the string: `"!word"` → `"word"`
  - the character is at the end of the string: `"word!"` → `"word"`

  Note that:

  - `"wo!rd"` → `"wo!rd"`

  In addition, any character not in: `a-zA-Z0-9_#@&.~:\/?[]()!$*+,;=-` will be substituted with whitespace before splitting on whitespace if the character is not between numbers:

  - `"twenty{one"` → `"twenty"`, `"one"` ("{"` is not between numbers)
  - `"20{1"` → `"20{1"` ("{"` is between numbers)

  Note that:

  - `"name@example.com"` → `"name@example.com"`
  - `"10,000.1"` → `"10,000.1"`
  - `"1 - 2"` → `"1"`,`"2"`


- ### Configuration

  - `"Intent Tokenization Flag"`: Flag used to check whether to split intents
  - `"Intent Split Symbol"`: The symbol on which the intent should be split
  - `"Token Pattern"`: The regular expression to detect tokens


  # PUT IMAGE HERE

---

## Featurizers

Text featurizers are divided into two different categories: `sparse featurizers` and `dense featurizers`. Sparse featurizers are featurizers that return feature vectors with a lot of missing values, e.g. zeros. As those feature vectors would normally take up a lot of memory, we store them as sparse features. Sparse features only store the values that are non zero and their positions in the vector. Thus, we save a lot of memory and are able to train on larger datasets.

All featurizers can return two different kind of features: sequence features and sentence features. The sequence features are a matrix of size `(number-of-tokens x feature-dimension)`. The matrix contains a feature vector for every token in the sequence. This allows us to train sequence models. The sentence features are represented by a matrix of size `(1 x feature-dimension)`. It contains the feature vector for the complete utterance. The sentence features can be used in any bag-of-words model. The corresponding classifier can therefore decide what kind of features to use. Note: The `feature-dimension` for sequence and sentence features does not have to be the same.

### RegexFeaturizer

- ### Short

  Creates a vector representation of the user message using regular expressions

- ### Outputs

  `Sparse Features` for user messages and `tokens.pattern`

- ### Requires

  `tokens`

- ### Type

  Sparse featurizer

- ### Description

  Creates features for entity extraction and intent classification. During training the `RegexFeaturizer` creates a list of regular expressions defined in the training data format. For each regex, a feature will be set marking whether this expression was found in the user message or not. All features will later be fed into an intent classifier / entity extractor to simplify classification (assuming the classifier has learned during the training phase, that this set feature indicates a certain intent / entity). Regex features for entity extraction are currently only supported by the `CRFEntityExtractor` and the `DIETClassifier` components!


- ### Configuration

  - `"Case Sensitive"`: Make the featurizer case insensitive by setting value to `False`, the default is `True`
  - `"Use Word Boundaries"`: To correctly process languages such as Chinese that don't use whitespace for word separation, set the value to `False`, the default is `True` 


  # PUT IMAGE HERE


  ### CountVectorsFeaturizer

- ### Short

  Creates bag-of-words representation of user messages, intents, and responses

- ### Outputs

  `Sparse Features` for user messages, intents, and responses

- ### Requires

  `tokens`

- ### Type

  Sparse featurizer

- ### Description

  Creates features for intent classification and response selection. Creates bag-of-words representation of user message, intent, and response using [sklearn's CountVectorizer](https://scikit-learn.org/stable/modules/generated/sklearn.feature_extraction.text.CountVectorizer.html). All tokens which consist only of digits (e.g. 123 and 99 but not a123d) will be assigned to the same feature.


- ### Configuration

  See [sklearn's CountVectorizer docs](https://scikit-learn.org/stable/modules/generated/sklearn.feature_extraction.text.CountVectorizer.html) for detailed description of the configuration parameters.

  This featurizer can be configured to use word or character n-grams, using the `Analyzer` configuration parameter. By default `Analyzer` is set to `word` so word token counts are used as features. If you want to use character n-grams, set `Analyzer` to char or char_wb. The lower and upper boundaries of the n-grams can be configured via the parameters min_ngram and max_ngram. By default both of them are set to 1. By default the featurizer takes the lemma of a word instead of the word directly if it is available. The lemma of a word is currently only set by the `SpacyTokenizer`.

  > **Note**
  > Option `char_wb` creates character n-grams only from text inside word boundaries; n-grams at the edges of words are padded with space. This option can be used to create [Subword Semantic Hashing](https://arxiv.org/abs/1810.07150).

  > **Note**
  > For character n-grams do not forget to increase `Min N-gram` and `Max N-gram` parameters. Otherwise the vocabulary will contain only single letters.

  Handling Out-Of-Vocabulary (OOV) words:

  > **Note**
  > Enabled only if analyzer is word.

  Since the training is performed on limited vocabulary data, it cannot be guaranteed that during prediction an algorithm will not encounter an unknown word (a word that were not seen during training). In order to teach an algorithm how to treat unknown words, some words in training data can be substituted by generic word `OOV Token`. In this case during prediction all unknown words will be treated as this generic word `OOV Token`

  For example, one might create separate intent `outofscope` in the training data containing messages of different number of `OOV Token` s and maybe some additional general words. Then an algorithm will likely classify a message with unknown words as this intent `outofscope`.

  `OOV Token` set a keyword for unseen words; if training data contains `OOV Token` as words in some messages, during prediction the words that were not seen during training will be substituted with provided `OOV Token`; if `OOV Token=None` (default behavior) words that were not seen during training will be ignored during prediction time;

  > **Note**
  > This featurizer creates a bag-of-words representation by counting words, so the number of `OOV Token` in the sentence might be important.

  If you want to share the vocabulary between user messages and intents, you need to set the option `Use Shared Vocab` to `True`. In that case a common vocabulary set between tokens in intents and user messages is build.

  To ensure that `Sparse Features` are of fixed size during [incremental training](https://rasa.com/docs/rasa/2.x/command-line-interface/#incremental-training), the component should be configured to account for additional vocabulary tokens that may be added as part of new training examples in the future. To do so, configure the `Additional Vocabulary Text Size`, `Additional Vocabulary Response Text Size`, and `Additional Vocabulary Action Text Size` parameter while training the base model from scratch

  The values are kept at a minimum of 1000 by default in order to avoid running out of additional vocabulary slots too frequently during incremental training. Once the component runs out of additional vocabulary slots, the new vocabulary tokens are dropped and not considered during featurization. At this point, it is advisable to retrain a new model from scratch.


  # PUT IMAGE HERE

  ### LexicalSyntacticFeaturizer

- ### Short

  Creates lexical and syntactic features for a user message to support entity extraction.

- ### Outputs

  `Sparse Features` for user messages

- ### Requires

  `tokens`

- ### Type

  Sparse featurizer

- ### Description

  Creates features for entity extraction. Moves with a sliding window over every token in the user message and creates features according to the configuration (see below). As a default configuration is present, you don't need to specify a configuration.

- ### Configuration

  There is no need to configure, the default configuration is used. The default configuration:

  - Features: 
    - [ low , title , upper ]
    - [ BOS , EOS , low , upper , title , digit ]
    - [ low , title , upper ]
  - Prefix Suffix Case Sensitive: True


  | Feature Name |                                           Description                                              |
  | ------------ | -------------------------------------------------------------------------------------------------- |
  | BOS          | Checks if the token is at the beginning of the sentence                                            |
  | EOS          | Checks if the token is at the end of the sentence                                                  |
  | low          | Checks if the token is lower case                                                                  |
  | title        | Checks if the token starts with an uppercase character and all remaining characters are lowercased |
  | upper        | Checks if the token is upper case                                                                  |  
  | digit        | Checks if the token contains just digits                                                           |


  # PUT IMAGE HERE

  ---

  ## Intent Classifiers

  Intent classifiers assign one of the intents defined in the domain file to incoming user messages.

  ### DIETClassifier

  - ### Short

  Dual Intent Entity Transformer (DIET) used for intent classification and entity extraction

- ### Outputs

  `entities`, `intent` and `intent ranking`

- ### Requires

  'sparse features' and/or 'dense features' for user message and optionally the intent

- ### Type

  Sparse featurizer

- ### Description

  Creates features for entity extraction. Moves with a sliding window over every token in the user message and creates features according to the configuration (see below). As a default configuration is present, you don't need to specify a configuration.

- ### Configuration

  Th


  # PUT IMAGE HERE

