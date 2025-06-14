import 'package:flutter/material.dart';
import 'gradient_container.dart';
// This is a Flutter application that displays a gradient background with centered text.

void main() {
  runApp(
    MaterialApp(
      home: Scaffold(
        body: GradientContainer(
          const Color.fromARGB(225, 33, 5, 109),
          const Color.fromARGB(255, 68, 21, 149),
        ),
      ),
    ),
  );
}
