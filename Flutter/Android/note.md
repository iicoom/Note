## SharedPreferences

SharedPreferences is an API from Android SDK to store and retrieve application preferences. SharedPreferences are simply sets of data values that stored persistently. Persistently which mean data you stored in the SharedPreferences are still exist even if you stop the application or turn off the device.

## Preparing an Android App for Release
https://flutter.dev/docs/deployment/android

### flutter_launcher_icons
https://pub.dev/packages/flutter_launcher_icons#-readme-tab-

1. Setup the config file #
```
dev_dependencies: 
  flutter_launcher_icons: "^0.7.2"
  
flutter_icons:
  android: "launcher_icon" 
  ios: true
  image_path: "assets/icon/icon.png"
```

2. Run the package
```
flutter pub get
flutter pub pub run flutter_launcher_icons:main
```

### 启动图片

1. Android 在android ▸  app ▸  src ▸ res ▸ drawable ▸ launch_background.xml 通过自定义drawable来实现自定义启动界面。

2. iOS 在 ios ▸  Runner ▸ Assets.xcassets ▸ LaunchImage.imageset文件夹中替换相应尺寸的图片， 如果使用不同的文件名，那还必须更新同一目录中的Contents.json文件。


### Building a release APK
Using the command line:

cd <app dir> (replace <app dir> with your application’s directory).
1. Run flutter build apk (flutter build defaults to --release).
2. The release APK for your app is created at <app dir>/build/app/outputs/apk/release/app-release.apk.



