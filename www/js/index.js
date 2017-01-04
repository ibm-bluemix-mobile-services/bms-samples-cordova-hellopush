/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

var app =  {
    // Initialize BMSClient
    initialize: function() {
        this.bindEvents();
    },

    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },

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

    register: function() {
        var header = document.getElementById("text-big");
        var connected = document.getElementById("text-connected");
        var details = document.getElementById("text-details");

        var success = function(successResponse) {
            header.style.display = "block";
            header.innerHTML = "Yay!";
            connected.innerHTML = "You are registered for Push Notifications.";
            details.innerHTML = "<h4>Response:</h4><i>" + successResponse + "</i>";
        };

        var failure = function(failureResponse) {
            header.style.display = "block";
            header.innerHTML = "Bummer";
            connected.innerHTML = "Something Went Wrong";
            details.innerHTML = "<h4>Response:</h4><i>" + failureResponse + "</i>";
        };

        BMSPush.registerDevice({"userId":"your_UserId"}, success, failure);
        app.registerNotificationsCallback();
    },

    // Register notification callback to handle notification when in app
    registerNotificationsCallback: function() {
        var showNotification = function(notif) {
          alert(JSON.stringify(notif));
        };
        BMSPush.registerNotificationsCallback(showNotification);
    }
};

app.initialize();
