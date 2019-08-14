# note

## flame

A minimalist Flutter game engine.

Currently it provides you with: a few utilities, images/sprites/sprite sheets, audio, a game loop and a component/object system.

### Components

#### rotating sprite 雪碧图

```text
import 'package:flame/components/component.dart';

Sprite sprite = new Sprite('player.png');
```

#### Animation Component

```text
this.player = new AnimationComponent.sequenced(64.0, 64.0, 'player.png', 2);
```

#### Parallax Component

The rationale is that when you look at the horizon and moving, closer objects seem to move faster than distant ones.

This component simulates this effect, making a very realistic background.

```text
this.bg = new ParallaxComponent();
this.bg.load([ 'bg/1.png', 'bg/2.png', 'bg/3.png' ]);
```

### Game Loop

Basically most games are built upon two methods:

* The render method takes the canvas ready for drawing the current state of the game.
* The update method receives the delta time in seconds since last update and allows you to move the next state.

### Assets

音频、图片、文件的处理

### User gestures

In order to handle user input, you can use the libraries provided by Flutter for regular apps: Gesture Recognizers.

[https://flutter.dev/docs/development/ui/advanced/gestures](https://flutter.dev/docs/development/ui/advanced/gestures)

## resolutions and aspect ratios

### aspect ratios

There are dozens \(if not more\) of different aspect ratios for screens of the phones available on the market today. Some examples include 3:2, 4:3, 8:5, 5:3, 16:9, and even as long as 18.5:9 like the one on my phone. The most common by far is 16:9. So let’s use this as a base.

