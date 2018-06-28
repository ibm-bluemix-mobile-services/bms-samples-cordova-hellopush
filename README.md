# HelloPush Cordova application for IBM Cloud Push Notifications Services

The HelloPush sample contains a Cordova project that you can use to learn.

### Before you begin

Before you start, make sure you have the following:

- A [IBM Cloud](http://bluemix.net) account.
- Learn about [Getting Started with Push](https://www.ng.bluemix.net/docs/services/mobilepush/index.html).
- APNs enabled push certificate (.p12 file) and the certificate password for your sandbox environment. For information about how to obtain a p.12 certificate, see the [configuring credentials for Apple push notifications(APNs)](https://console.bluemix.net/docs/services/mobilepush/push_step_1.html#push_step_1_ios) section in the Push documentation. For FCM find teh details here - [FCM Configurations](https://console.bluemix.net/docs/services/mobilepush/push_step_1.html#push_step_1_android).

### Create IBM Cloud Push Notifications Service


Create and Configure Push Notification service:

1. In the IBM Cloud Push Notifications Dashboard, go to the **Configuration** tab to configure your Push Notification Service.  
2. In the Apple Push Certificate section, select the Sandbox environment
3. Upload a valid APNs enabled push certificate (.p12 file), then enter the password associated with the certificate.
4. For FCM add the SenderID and APIKey


### Download the sample

Clone the samples with the following command:

```Bash
git clone https://github.com/ibm-bluemix-mobile-services/bms-samples-cordova-hellopush
```

### Add the native platforms to your app

```Bash
cordova platform add ios
cordova platform add android
```

## Add the plugin

```Bash
cordova plugin add bms-push
```

> Adding the bms-push plugin also adds the bms-core plugin

### Configure Cordova

Follow the README instructions for [Configuration](https://github.com/ibm-bluemix-mobile-services/bms-clientsdk-cordova-plugin-push/#configuration) to configure your development environment.

***Note: Project will not build until you follow instructions from this step.***

### Configure the front end in the sample

1. Navigate to the directory where the project was cloned.
2. Open <b>index.js</b> located at [your-directory]/www/js/index.js

JavaScript:

```Javascript
// deviceready Event Handler
//
// Replace the appGuid and clientSecret with your own values
// These can be retrieved from your Push Notifications service instance
// Set the region: BMSClient.REGION_US_SOUTH, BMSClient.REGION_UK, or BMSClient.REGION_SYDNEY
onDeviceReady: function() {
		var appGuid = "MY APP GUID";
		var clientSecret = "MY CLIENT SECRET";

		BMSClient.initialize(BMSClient.REGION_US_SOUTH);

 		// iOS Actionable notification options. Eg : {"category_Name":[{"identifier_name_1":"action_Name_1"},{"identifier_name_2":"action_Name_2"}]}
		// Pass empty for Android
		var category = {};
		BMSPush.initialize(appGuid, clientSecret, category);
},
```

***Note: Don't forget commas at the end of each line!***

### Build/Run the Cordova App

Now you can run your application in your mobile emulator or on your device.

1. Build the Cordova app. From your terminal enter the following command:

	```Bash
	cordova build ios
	cordova build android
	```

2. Run the sample app. From your terminal enter the following command:

	```Bash
	cordova run ios
	cordova run android
	```

***Note: If testing iOS you need to use a real device connected to your network and build/run from Xcode to register for and receive notifications.***

You will see a single view application with a "REGISTER" button. When you click this button the application will attempt to register the device and application to the Push Notification Service. The application will then display if the registration was successful or unsuccessful. In the unsuccessful state an error will be displayed in the Xcode/Android log, as well as in the application.

Once your device is registered for Push Notifications, it is ready to receive remote notifications. In the IBM Cloud Push Dashboard, navigate to Notifications. Under **Choose The Audience** select **All Devices**. This will send a notification to all devices that have registered for push notifications. Once the notification is received by your app an alert should appear with notification contents.

***Note: For iOS, this application runs on the latest version of XCode (7.0). You may need to update the application settings by setting Enable Bitcode to No. For more info please see the following blog entry:***


## Adding Auto signing in iOS

To set signing credentials iOS create file `build.json` in your app root. Follow the below patter,

Xcode 8 and iOS 10:

```
{
    "ios": {
        "debug": {
            "codeSignIdentity": "iPhone Developer",
            "developmentTeam": "FG35JLLMXX4A",
            "packageType": "development",
            "buildFlag": [
                "EMBEDDED_CONTENT_CONTAINS_SWIFT = YES",
                "ALWAYS_EMBED_SWIFT_STANDARD_LIBRARIES=NO",
                "LD_RUNPATH_SEARCH_PATHS = \"@executable_path/Frameworks\""
            ]
        },
        "release": {
            "codeSignIdentity": "iPhone Developer",
            "developmentTeam": "FG35JLLMXX4A",
            "packageType": "app-store",
            "buildFlag": [
                "EMBEDDED_CONTENT_CONTAINS_SWIFT = YES",
                "ALWAYS_EMBED_SWIFT_STANDARD_LIBRARIES=NO",
                "LD_RUNPATH_SEARCH_PATHS = \"@executable_path/Frameworks\""
            ]
        }
    }
}
```

Earlier versions:

```
{
    "ios": {
        "debug": {
            "codeSignIdentity": "iPhone Development",
            "provisioningProfile": "926c2bd6-8de9-4c2f-8407-1016d2d12954",
            "developmentTeam": "FG35JLLMXX4A",
            "packageType": "development"
        },
        "release": {
            "codeSignIdentity": "iPhone Distribution",
            "provisioningProfile": "70f699ad-faf1-4adE-8fea-9d84738fb306",
            "developmentTeam": "FG35JLLMXX4A",
            "packageType": "app-store"
        }
    }
}
```

Change teh bundle identifier in `config.xml` file.
After that to build ios use the `--buildConfig` flag in `cordova build` command

```
  cordova build ios --buildConfig
```


### Samples & videos

* Please visit for samples - [Github Sample](https://github.com/ibm-bluemix-mobile-services/bms-samples-android-hellopush)

* Video Tutorials Available here - [IBM Cloud Push Notifications](https://www.youtube.com/channel/UCRr2Wou-z91fD6QOYtZiHGA)


### License

This package contains sample code provided in source code form. The samples are licensed under the under the Apache License, Version 2.0 (the "License"). You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0 and may also view the license in the license.txt file within this package. Also see the notices.txt file within this package for additional notices.
