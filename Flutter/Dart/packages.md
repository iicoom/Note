> The Dart ecosystem uses packages to share software such as libraries and tools. 

## How to use packages

pubspec.yaml

### 在pubspec.yaml中添加依赖
```
dependencies:
  flutter:
    sdk: flutter

  # The following adds the Cupertino Icons font to your application.
  # Use with the CupertinoIcons class for iOS style icons.
  cupertino_icons: ^0.1.2
  english_words: ^3.1.0
```
添加完成后，点击idea工具条 Packages get 


## Creating packages

引入方法

```
import 'package:flutter/material.dart';
import 'package:english_words/english_words.dart';
import 'package:startup_name/modal_class/genres.dart';
```

## 常用packages
### http
```
dependencies:
  http: ^0.12.0+2
```

### 


```
import 'dart:convert' as convert;
import 'package:http/http.dart' as http;

main(List<String> arguments) async {
  // This example uses the Google Books API to search for books about http.
  // https://developers.google.com/books/docs/overview
  var url = "https://www.googleapis.com/books/v1/volumes?q={http}";

  // Await the http get response, then decode the json-formatted responce.
  var response = await http.get(url);
  if (response.statusCode == 200) {
    var jsonResponse = convert.jsonDecode(response.body);
    var itemCount = jsonResponse['totalItems'];
    print("Number of books about http: $itemCount.");
  } else {
    print("Request failed with status: ${response.statusCode}.");
  }
}
```