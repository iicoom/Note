# install

## Get the Flutter SDK

[https://flutter.io/docs/get-started/install/macos](https://flutter.io/docs/get-started/install/macos)

flutter doctor

## Add flutter to PATH

So, open the .bash\_profile or .zshrc file and add the following kind of path to it.

```text
➜  ~ vim .zshrc
增加以下内容
# flutter
export PATH=${PATH}:/Users/guitar/Development/flutter/bin

➜  ~ which flutter
/Users/guitar/Development/flutter/bin/flutter

➜  ~ flutter doctor
Doctor summary (to see all details, run flutter doctor -v):
[✓] Flutter (Channel stable, v1.5.4-hotfix.2, on Mac OS X 10.14.5 18F132, locale zh-Hans-CN)
[✓] Android toolchain - develop for Android devices (Android SDK version 28.0.3)
[✓] iOS toolchain - develop for iOS devices (Xcode 10.2.1)
[✓] Android Studio (version 3.3)
[✓] IntelliJ IDEA Ultimate Edition (version 2018.3.3)
[✓] VS Code (version 1.34.0)
[✓] Connected device (2 available)

• No issues found!
```

## Android Studio \(version 3.3\)

[https://developer.android.com/studio/](https://developer.android.com/studio/)

## 环境配置

### Android licenses not accepted

To resolve this, run: flutter doctor --android-licenses

### 安装intelliJ IDEA Flutter Dart plugins

### iOS toolchain

➜ Development flutter doctor Doctor summary \(to see all details, run flutter doctor -v\): \[✓\] Flutter \(Channel stable, v1.0.0, on Mac OS X 10.14.2 18C54, locale zh-Hans-CN\) \[✓\] Android toolchain - develop for Android devices \(Android SDK 28.0.3\) \[✓\] iOS toolchain - develop for iOS devices \(Xcode 10.1\) \[✓\] Android Studio \(version 3.3\) \[✓\] IntelliJ IDEA Ultimate Edition \(version 2018.1\) \[!\] Connected device ! No devices available

## Waiting for another flutter command to release the startup lock...解决办法

ps -ef \| grep dart

kill 掉 dart进程

## 升级flutter

Flutter upgrade

## flutter run: No connected devices

需要先开启模拟器

## Simulator

On your Mac, find the Simulator via Spotlight or by using the following command:

在spotlight中搜索Simulator

Hardware-device 下可以切换设备

## Android studio 模拟器

Tools-AVD Manager

