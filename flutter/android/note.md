# note

## SharedPreferences

SharedPreferences is an API from Android SDK to store and retrieve application preferences. SharedPreferences are simply sets of data values that stored persistently. Persistently which mean data you stored in the SharedPreferences are still exist even if you stop the application or turn off the device.

## Preparing an Android App for Release

[https://flutter.dev/docs/deployment/android](https://flutter.dev/docs/deployment/android)

### flutter\_launcher\_icons

[https://pub.dev/packages/flutter\_launcher\_icons\#-readme-tab-](https://pub.dev/packages/flutter_launcher_icons#-readme-tab-)

1. Setup the config file \#

   \`\`\`

   dev\_dependencies: 

   flutter\_launcher\_icons: "^0.7.2"

flutter\_icons: android: "launcher\_icon" ios: true image\_path: "assets/icon/icon.png"

```text
2. Run the package
```

flutter pub get flutter pub pub run flutter\_launcher\_icons:main

\`\`\`

### 启动图片

1. Android 在android ▸ app ▸ src ▸ res ▸ drawable ▸ launch\_background.xml 通过自定义drawable来实现自定义启动界面。
2. iOS 在 ios ▸ Runner ▸ Assets.xcassets ▸ LaunchImage.imageset文件夹中替换相应尺寸的图片， 如果使用不同的文件名，那还必须更新同一目录中的Contents.json文件。

### Building a release APK

Using the command line:

cd  \(replace  with your application’s directory\). 1. Run flutter build apk \(flutter build defaults to --release\). 2. The release APK for your app is created at /build/app/outputs/apk/release/app-release.apk.

