## Get the Flutter SDK
https://flutter.io/docs/get-started/install/macos

flutter doctor

## Android Studio (version 3.3)
https://developer.android.com/studio/

## 环境配置
### Android licenses not accepted
To resolve this, run: flutter doctor --android-licenses

### 安装intelliJ IDEA Flutter Dart plugins

### iOS toolchain

➜  Development flutter doctor
Doctor summary (to see all details, run flutter doctor -v):
[✓] Flutter (Channel stable, v1.0.0, on Mac OS X 10.14.2 18C54, locale zh-Hans-CN)
[✓] Android toolchain - develop for Android devices (Android SDK 28.0.3)
[✓] iOS toolchain - develop for iOS devices (Xcode 10.1)
[✓] Android Studio (version 3.3)
[✓] IntelliJ IDEA Ultimate Edition (version 2018.1)
[!] Connected device
    ! No devices available


## Waiting for another flutter command to release the startup lock...解决办法

ps -ef | grep dart

kill 掉 dart进程

## 升级flutter
Flutter upgrade

## flutter run: No connected devices
需要先开启模拟器