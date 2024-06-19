---
title: DevKit Utils
---

# {{ $frontmatter.title }}

DevKit Utils offers the most common functions for developing.

## AES Encryption and Decryption

### Get a secret

AES requires a 16-byte-long string as secret, you can implement it on your own, or use the API provided.

```java{5}
import com.onixbyte.devkit.utils.AesUtil;

public class AesExample {
    public static void main(String... args) {
        var secret = AesUtil.generateRandomSecret();
        System.out.println(secret);
    }
}
```

### Encryption and Decryption

Encryption accepts 2 arguments: the **data** you want to encrypt, and the **secret** to execute the encryption. There
are 2 implementations with encryption and decryption:
```java
public static byte[] encrypt(byte[] data, byte[] secret);

public static byte[] decrypt(byte[] data, byte[] secret);
```
and
```java
public static String encrypt(String data, String secret);

public static String decrypt(String data, String secret);
```

For the `AesUtil#{en|de}crypt(String, String)`, you can just pass the data and secret with raw String type, but for 
the `byte[]` parameter, you'll need to pass the String with `String#getBytes(StandardCharset)`.

## Base64 Encode and Decode

You need to know that there are two different ways to encode and decode with Base64. Java provides standard encoding
by `Base64.getEncoder()` and URL and filename safe Base64 encoding by `Base64.getUrlEncoder()`.

**Standard encoder** follows the standard Base64 encoding scheme as defined by RFC 4648. And the output consists of the
characters `A-Z`, `a-z`, `0-9`, `+`, `/`, and the padding character `=` (if necessary). This encoder is typically used
for encoding binary data that needs to be represented in a textual format for storage or transmission, such as encoding
data for MIME (Multipurpose Internet Mail Extensions).

**URL and Filename Safe Base64 Encoder** is also based on RFC 4648, specifically the "Base64url" variant. The output
consists of the characters `A-Z`, `a-z`, `0-9`, `-`, `_`, and no padding character is used by default. This makes the
encoded data safe to use in URLs and filenames. It is used when the encoded data needs to be included in URLs or file
names, where the standard Base64 characters `+`, `/`, and `=` may cause issues or require special handling.

### Encode and Decode

To encode a string to a base64 string, you'll use 
```java
var input = "This is a sample string";

// use standard encoder with UTF-8 charset
var output1 = Base64Util.encode(input); 

// for standard encoder with specified charset
var output2 = Base64Util.encode(input, StandardCharset.UTF_8); 

// for url and filename safe encoder with UTF-8 charset
var output3 = Base64Util.encodeUrlComponents(input); 

// for url and filename safe encoder with specified charset
var output4 = Base64Util.encodeUrlComponents(input, StandardCharset.UTF_8); 
```

## Better branches

`BranchUtil` is a utility class designed to simplify complex conditional logic in Java programming. By leveraging
lambda expressions and functional programming concepts, `BranchUtil` reduces the verbosity of `if...else` statements, 
enhancing code readability and maintainability.

### Simple Conditional Execution

To execute code based on a single condition or multiple conditions combined with logical **OR**:

```java
// Execute if either condition is true
var result = BranchUtil.or(1 == 1, 2 == 1)
    .handle(() -> "At least one condition is true.");
System.out.println(result);

// Execute if both conditions are true
BranchUtil.and(1 == 1, 2 == 2)
    .handle(() -> {
        System.out.println("Both conditions are true.");
    });
```

### Conditional Execution with Else Branch

You can also define an else block to handle the false case:

```java
// Handle with else case
String result = BranchUtil.or(1 == 2, 2 == 1)
    .handle(
        () -> "At least one condition is true.",
        () -> "No conditions are true."
    );
System.out.println(result);
```

### Using Boolean Suppliers

For conditions that may require computation or method calls, use BooleanSupplier to lazily evaluate the conditions:

```java
BooleanSupplier condition1 = () -> {
    // some complex logic
    return true;
};
BooleanSupplier condition2 = () -> {
    // some other logic
    return false;
};

var result = BranchUtil.and(condition1, condition2)
    .handle(
        () -> "All conditions are true.",
        () -> "At least one condition is false."
    );
System.out.println(result);
```

### Handling Without Return Values

If no return value is needed, you can use Runnable to execute code blocks:

```java
// Using Runnable for side effects only
BranchUtil.or(3 > 2)
    .handle(
        () -> System.out.println("Condition is true."),
        () -> System.out.println("Condition is false.")
    );
```

### Best Practices

Where possible, use `BooleanSupplier` to ensure that conditions are evaluated only if necessary. This is particularly
beneficial for performance when conditions are computationally expensive.

Utilize `BranchUtil` to make your conditional logic more readable. However, avoid overusing it in simple cases where a
traditional if-else would suffice.

Be cautious about null values. `BranchUtil` methods handle null gracefully by ignoring them, but it's good practice to
ensure that the inputs to these functions are valid where possible.

## High-precision Chained Calculator

The `ChainedCalcUtil` class provides a convenient way to perform high-precision chained calculations using `BigDecimal`.
It supports basic arithmetic operations such as addition, subtraction, multiplication, and division, allowing 
developers to achieve accurate results without precision loss.

To start using `ChainedCalcUtil`, you need to initialise it with an initial value using the startWith method. 
Once initialised, you can chain various arithmetic operations and finally retrieve the result.

```java
var calculator = ChainedCalcUtil.startWith(Number value);
```

### Addition

```java
var result = ChainedCalcUtil.startWith(3)
    .add(4)
    .getValue();
```

### Subtraction

```java
var result = ChainedCalcUtil.startWith(4)
    .subtract(2)
    .getValue();
```

### Multiplication

```java
var result = ChainedCalcUtil.startWith(3)
    .multiply(6)
    .getValue();
```

### Division

```java
var result = ChainedCalcUtil.startWith(6)
    .divide(2)
    .getValue();
```

### Division with Scale

```java
var result = ChainedCalcUtil.startWith(13)
    .divideWithScale(7, 2)
    .getValue();
```

### Retrieving Values

You can retrieve the result in different formats:

#### BigDecimal

```java
BigDecimal result = calculator.getValue();
```

#### Integer

```java
Integer result = calculator.getInteger();
```

#### Long

```java
Long result = calculator.getLong();
```

#### Double

```java
Double result = calculator.getDouble();
```

### Handling Scale

#### Addition with Scale

```java
BigDecimal result = ChainedCalcUtil.startWith(3)
    .add(4, 2)
    .getValue();
```

#### Subtraction with Scale

```java
BigDecimal result = ChainedCalcUtil.startWith(4)
    .subtract(2, 2)
    .getValue();
```

#### Multiplication with Scale

```java
BigDecimal result = ChainedCalcUtil.startWith(3)
.multiply(6, 2)
.getValue();
```

#### Division with Scale Before Operation

```java
BigDecimal result = ChainedCalcUtil.startWith(13)
.divide(7, 2, 2)
.getValue();
```

### Full Example

Here is a full example demonstrating various operations:

```java
BigDecimal result = ChainedCalcUtil.startWith(10)
    .add(5)                // 10 + 5
    .subtract(3)           // 15 - 3
    .multiply(2)           // 12 * 2
    .divideWithScale(4, 2) // 24 ÷ 4 with scale 2
    .getValue();           // Result: 6.00
```

## Hash Calculation

We offers Hash Calculation with class `HashUtil`, and it supports MD2, MD5, SHA-1, SHA-224, SHA-256, SHA-384 and 
SHA-512 algorithms. Moreover, `HashUtil` also supports multiple charsets.

Be advised, hash algorithms are one-way; you cannot get the original data from the hash except by brute-force cracking.
These functions are commonly used for data integrity checking and password storage, but not for encryption purposes.

This class provides these functions to get a hashed string:

- `md2(String value[, Charset charset])`
- `md5(String value[, Charset charset])`
- `sha1(String value[, Charset charset])`
- `sha224(String value[, Charset charset])`
- `sha256(String value[, Charset charset])`
- `sha384(String value[, Charset charset])`
- `sha512(String value[, Charset charset])`

The parameter `value` is the original data of the hashed string, and the `charset` is the encoding of reading the data.

Here is an example of using `HashUtil`:

```java
import com.onixbyte.devkit.utils.HashUtil;

public class Main {
    public static void main(String[] args) {
        // calculate with MD2 algorithm
        String md2Hash = HashUtil.md2("someString");
        System.out.println("MD2: " + md2Hash);

        // calculate with MD5 algorithm
        var md5Hash = HashUtil.md5("someString");
        System.out.println("MD5: " + md5Hash);

        // calculate with SHA-1 algorithm
        String sha1Hash = HashUtil.sha1("someString");
        System.out.println("SHA-1: " + sha1Hash);

        // calculate with SHA-2 algorithm
        String sha224Hash = HashUtil.sha224("someString");
        System.out.println("SHA-224: " + sha224Hash);

        // calculate with SHA-256 algorithm
        String sha256Hash = HashUtil.sha256("someString");
        System.out.println("SHA-256: " + sha256Hash);

        // calculate with SHA-384 algorithm
        String sha384Hash = HashUtil.sha384("someString");
        System.out.println("SHA-384: " + sha384Hash);

        // calculate with SHA-512 algorithm
        String sha512Hash = HashUtil.sha512("someString");
        System.out.println("SHA-512: " + sha512Hash);
    }
}
```

## Conversion of Map and Object

When developing, we may need to convert an Object to Map or convert a Map to an Object. To convert an Object to a Map,
here is a sample of converting an Object to a Map.

```java
// the constructor of class Person
public Person(String name, int age) {
    // set values
}

// Tested with JDK 21 and preview features enabled.
var person = new Person("John Doe", 18);
var personMap = MapUtil.objectToMap(person);
personMap.forEach((key, value) -> {
    System.out.println(STR."\{key} = \{value}");
});
```

and the output will be:

```text
name = John Doe
age = 18
```
