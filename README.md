## Human Duration

This package gives functions to convert a duration in milliseconds to usable and human readable formats.

### TeeBee packages

teebee packages are generic functions often needs in projects.

### Installation

npm -i human-duration-teebee

### Usage

**Input parameter**
always a number of milliseconds

**Output parameter**
a string notation

**long_full_notation(number duration in milliseconds)**
writes all out in text

*example:* 2 days, 4 hours, 22 minutes, 31.75 seconds

**long_valuable_notation(number duration in milliseconds)**
writes all out in text, except 0 values (only valuable numbers)

*example:* 2 days, 1 minute, 22.55 seconds   (0 hours not written)

**short_full_notation(number duration in milliseconds)**
writes all out in abbreviations

*example:* 2d 4h 22m 31.75s

**short_valuable_notation(number duration in milliseconds)**
writes all out in abbreviations, except 0 values (only valuable numbers)

*example:* 2d 1m 22.55s   (0 not written)

**time_full_notation(number duration in milliseconds)**
writes all out in a very compact time notation

**example:* 2d 4:22:31.75

**time_valuable_notation(number duration in milliseconds)**
writes all out in a very compact time notation, but no days if 0 (only valuable numbers)

**example:* 0:22:31.75  (0 days not written)