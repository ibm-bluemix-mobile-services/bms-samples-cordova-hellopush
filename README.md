# HelloPush Cordova application for IBM MobileFirst Services on IBM Bluemix

The HelloPush sample contains a Cordova project that you can use to learn.

### Before you begin

Before you start, make sure you have the following:

- A [Bluemix](http://bluemix.net) account.
- Learn about [Getting Started with Push](https://www.ng.bluemix.net/docs/services/mobilepush/index.html).
- APNs enabled push certificate (.p12 file) and the certificate password for your sandbox environment. For information about how to obtain a p.12 certificate, see the [configuring credentials for a notification provider](https://www.ng.bluemix.net/docs/services/mobilepush/index.html#push_provider) section in the Push documentation.

### Configure the mobile backend in Bluemix

Before you can run the sample application, you must set up an app on Bluemix.  The following procedure shows you how to create a MobileFirst Services Starter application. A Node.js runtime environment is created so that you can provide server-side functions, such as resource URIs and static files. The Cloudant®NoSQL DB, IBM Push Notifications, and Mobile Client Access services are then added to the app.

Create a mobile backend in the  Bluemix dashboard:

1. In the **Boilerplates** section of the Bluemix catalog, click **MobileFirst Services Starter**.
2. Enter a name and host for your mobile backend and click **Create**.
3. Click **Finish**.

Configure Push Notification service:

1.	In the IBM Push Notifications Dashboard, go to the **Configuration** tab to configure your Push Notification Service.  
2.  In the Apple Push Certificate section, select the Sandbox environment
3.  Upload a valid APNs enabled push certificate (.p12 file), then enter the password associated with the certificate.

### Download the sample

Clone the samples with the following command:
	
	git clone https://github.com/ibm-bluemix-mobile-services/bms-samples-cordova-hellopush
	
### Add the native platforms to your app

	cordova platform add ios
	cordova platform add android
	
## Add the plugin

	cordova plugin add ibm-mfp-push
	
> Adding the ibm-mfp-push plugin also adds the ibm-mfp-core plugin
	
### Configure Cordova

Follow the README instructions for [Configuration](https://github.com/ibm-bluemix-mobile-services/bms-clientsdk-cordova-plugin-push/#configuration) to configure your development environment.

***Note: Project will not build until you follow instructions from this step.***
  
### Configure the front end in the sample

1. Navigate to the directory where the project was cloned.
2. Open **index.js** located at [your-directory]/www/js/index.js
3. Replace the \<APPLICATION_ROUTE\> and \<APPLICATION_GUID\> with your Bluemix route and appGUID.

Javascript:

	// Bluemix credentials
	route: "<APPLICATION_ROUTE>",
	guid: "<APPLICATION_GUID>",

***Note: Don't forget commas at the end of each line!***

### Build/Run the Cordova App

Now you can run your application in your mobile emulator or on your device.

1. Build the Cordova app. From your terminal enter the following command:

		cordova build ios
		cordova build android

2. Run the sample app. From your terminal enter the following command:

		cordova run ios
		cordova run android

***Note: If testing iOS you need to use a real device connected to your network and build/run from Xcode to register for and receive notifications.***

You will see a single view application with a "REGISTER" button. When you click this button the application will attempt to register the device and application to the Push Notification Service. The application will then display if the registration was successful or unsuccessful. In the unsuccessful state an error will be displayed in the Xcode/Android log, as well as in the application.

Once your device is registered for Push Notifications, it is ready to receive remote notifications. In the Bluemix Push Dashboard, navigate to Notifications. Under **Choose The Audience** select **All Devices**. This will send a notification to all devices that have registered for push notifications. Once the notification is received by your app an alert should appear with notification contents.

***Note: For iOS, this application runs on the latest version of XCode (7.0). You may need to update the application settings by setting Enable Bitcode to No. For more info please see the following blog entry:***

[Connect Your iOS 9 App to Bluemix](https://developer.ibm.com/bluemix/2015/09/16/connect-your-ios-9-app-to-bluemix/)

### License

This package contains sample code provided in source code form. The samples are licensed under the under the Apache License, Version 2.0 (the "License"). You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0 and may also view the license in the license.txt file within this package. Also see the notices.txt file within this package for additional notices.
