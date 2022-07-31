import 'package:flutter/material.dart';

class AppIndex extends StatelessWidget {
  const AppIndex({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        primarySwatch: Colors.blue,
        visualDensity: VisualDensity.adaptivePlatformDensity,
      ),
      home: const HomePage(),
    );
  }
}

class HomePage extends StatelessWidget {
  const HomePage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Flutter Clean Architecture Example'),
        centerTitle: true,
      ),
      body: const Center(
        child: Text('Flutter Clean Architecture'),
      ),
    );
  }
}
