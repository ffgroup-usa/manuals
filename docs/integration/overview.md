---
id: integration-overview
title: Integration
sidebar_position: 1
---
## VAPIX

Supported events

## Push Events configuration

To send the recognized data to other applications such as VMS (Video Management Systems) or Data Management Systems, you can utilize FF-Events in CAMMRA AI. Follow these steps to set up event sending:

Go to the application's web page and select the "INTEGRATION" tab.

Select Profile to configure: up to 3 profiles are supported.

Select the Protocol: Choose the appropriate protocol for sending events. The commonly used options are TCP (Transmission Control Protocol) and HTTP POST (Hypertext Transfer Protocol with POST method). You can also choose other protocols like FTP, UTMC, or UTMC-2 based on your specific requirements.

TCP: To send data to external applications, the TCP protocol is used. The camera establishes a TCP connection with the specified URL and sends data over the socket. The external application should open a TCP socket and listen for incoming data.

HTTP POST: To send JSON data and images to a web service, the multipart POST HTTP(s) request method is used. The data transferred includes a JSON payload containing the event description and the associated image.

Data Structure: Refer to the FF protocol documentation or the API FF Integration HTTP POST JSON for the data structure details. This documentation provides the necessary guidelines for formatting the data to be sent.

Configure Server URL: Specify the link or URL where you want to send the data. This could be the endpoint of the receiving application or system. You can explicitly define URL starting with HTTP (ex. “http://ip:port/listener.php”) in case camera Network configuration allows both, HTTP and HTTPS, but your server is only configured to use HTTP.

Set Device ID: Assign a unique identifier to the packets sent from the camera. This helps in distinguishing and tracking the data packets.

Define Event Types: Choose the desired event types based on your requirements. The available event types include "New," "Update," and "Lost." Each event type corresponds to specific conditions and triggers for sending data.

New Event: This event occurs when a vehicle is detected for the first time. The direction of the vehicle is undefined.

Update Event: This event occurs when there is a change in the data package. It can include updates to the recognized license plate, calculation and addition of direction, or changes in the recognition zone.

Lost Event: This event occurs when a detected vehicle has been absent from the recognition zone for more than 10 seconds.

By configuring these FF-Events settings, you can establish the communication and data exchange between CAMMRA AI and other applications or systems. This enables you to seamlessly integrate the recognized data into your preferred workflow and utilize it for further analysis or processing.

## Direct integration

Direct integration section is dedicated to integrations to 3rd party systems, which requires sending in different format / protocol, than CAMMRA AI provides on its own.

CAMMRA AI configuration for Genetec Security Center integration:

For to configure CAMMRA AI sending data to Genetec via 3rd party ALPR plugin:

1. Go to Direct integration and choose Genetec from the drop-down menu.

2. Fill url https://hostname/api/v1/lpr/LprIngestion/reads

Then choose any Camera ID name and user’s credentials.

In Genetec integration it’s not possible to choose the event type. CAMMRA AI sends lost events only.

3. Toggle Turn On button to the right to Enable integration.

4. Use HTTPS and make sure to switch  On Self-signed in the Settings >  Security section.

5. In Settings > Image settings > Screenshot to save > Frame type choose the type of image which will be displayed in Security Desk as a part of read. Standard content of every read is text form of the License plate, date and time information and License plate crop. It is recommended to add Full frame or Downsized frame image to have a context view.

Configuration on Genetec side:

First off all, check that entire system is online

Go to https://your_ip_address/Genetec

Make sure that Database, Directory and License is online

If not, run all Genetec and SQLEXPRESS services

2. Open Genetec™ Config Tool >>> Plugins

3. Press Add an entity >>> Plugin and choose LPR plugin then next next next

4. Select added LPR plugin and go to Data sources tab and configure field like this

Enabled: ✅

Name: Plugin REST API

API path prefix: lpr

REST port: 443

WebSDK host: localhost

WebSDK port: 443

Allow self signed certificates: ✅

Enabled: ✅

Name: Security Center Lpr Events

Processing frequency: 5 sec

5. Go to Data sinks tab

6. Click on plus sign   and choose Database type

7. Configure database

Enabled: ✅

Source:

Plugin REST API ✅

Native ALPR events ✅

Name: Reads DB

Include:

Reads ✅

Hits ✅

Images ✅

8. Go to Resources tab and  Delete the database then  Create a database

9. Create an API user

a. Go to Config Tool >>> User Management and Add an entity User. Enter User name and Password; Leave other fields without any changes.

b. Select added user and go to Privileges tab allow the Third-party ALPR reads API privilege and whole section of Application privileges then

2N IP Base Intercom integration:

To configure sending data to 2N via 3rd party ALPR plugin, go to Direct integration and choose 2N IP device from the drop-down menu.

---

<!-- REVIEW: Images below were extracted from the original DOCX and placed automatically. Confirm placement and captions. -->

**16-vapix.png**  
<!-- Source section: Integration with other systems / VAPIX -->

![16-vapix.png](/img/integration/16-vapix.png)

**17-push-events-configuration.png**  
<!-- Source section: FTP Fields Naming Conventions for CAMMRA AI Event Data / Push Events configuration -->

![17-push-events-configuration.png](/img/integration/17-push-events-configuration.png)

**18-direct-integration.png**  
<!-- Source section: FTP Fields Naming Conventions for CAMMRA AI Event Data / Direct integration -->

![18-direct-integration.png](/img/integration/18-direct-integration.png)

**19-direct-integration.png**  
<!-- Source section: FTP Fields Naming Conventions for CAMMRA AI Event Data / Direct integration -->

![19-direct-integration.png](/img/integration/19-direct-integration.png)

**20-direct-integration.png**  
<!-- Source section: FTP Fields Naming Conventions for CAMMRA AI Event Data / Direct integration -->

![20-direct-integration.png](/img/integration/20-direct-integration.png)

**21-direct-integration.png**  
<!-- Source section: FTP Fields Naming Conventions for CAMMRA AI Event Data / Direct integration -->

![21-direct-integration.png](/img/integration/21-direct-integration.png)

**22-direct-integration.png**  
<!-- Source section: FTP Fields Naming Conventions for CAMMRA AI Event Data / Direct integration -->

![22-direct-integration.png](/img/integration/22-direct-integration.png)

**23-direct-integration.png**  
<!-- Source section: FTP Fields Naming Conventions for CAMMRA AI Event Data / Direct integration -->

![23-direct-integration.png](/img/integration/23-direct-integration.png)

**24-direct-integration.png**  
<!-- Source section: FTP Fields Naming Conventions for CAMMRA AI Event Data / Direct integration -->

![24-direct-integration.png](/img/integration/24-direct-integration.png)

**25-direct-integration.png**  
<!-- Source section: FTP Fields Naming Conventions for CAMMRA AI Event Data / Direct integration -->

![25-direct-integration.png](/img/integration/25-direct-integration.png)

**26-direct-integration.png**  
<!-- Source section: FTP Fields Naming Conventions for CAMMRA AI Event Data / Direct integration -->

![26-direct-integration.png](/img/integration/26-direct-integration.png)

**27-direct-integration.png**  
<!-- Source section: FTP Fields Naming Conventions for CAMMRA AI Event Data / Direct integration -->

![27-direct-integration.png](/img/integration/27-direct-integration.png)

**28-direct-integration.png**  
<!-- Source section: FTP Fields Naming Conventions for CAMMRA AI Event Data / Direct integration -->

![28-direct-integration.png](/img/integration/28-direct-integration.png)

**29-direct-integration.png**  
<!-- Source section: FTP Fields Naming Conventions for CAMMRA AI Event Data / Direct integration -->

![29-direct-integration.png](/img/integration/29-direct-integration.png)

**30-direct-integration.png**  
<!-- Source section: FTP Fields Naming Conventions for CAMMRA AI Event Data / Direct integration -->

![30-direct-integration.png](/img/integration/30-direct-integration.png)

**31-direct-integration.png**  
<!-- Source section: FTP Fields Naming Conventions for CAMMRA AI Event Data / Direct integration -->

![31-direct-integration.png](/img/integration/31-direct-integration.png)

**32-step-1-specify-the-url-ip-address-of-your-2n-device-use-https-and-make-sure-to-switch-on-self-signed-in-the-settings-security-section.png**  
<!-- Source section: FTP Fields Naming Conventions for CAMMRA AI Event Data / Step 1. Specify the URL IP address of your 2N device, use HTTPS and make sure to switch  On Self-signed in the Settings >  Security section. -->

![32-step-1-specify-the-url-ip-address-of-your-2n-device-use-https-and-make-sure-to-switch-on-self-signed-in-the-settings-security-section.png](/img/integration/32-step-1-specify-the-url-ip-address-of-your-2n-device-use-https-and-make-sure-to-switch-on-self-signed-in-the-settings-security-section.png)

**33-step-1-specify-the-url-ip-address-of-your-2n-device-use-https-and-make-sure-to-switch-on-self-signed-in-the-settings-security-section.png**  
<!-- Source section: FTP Fields Naming Conventions for CAMMRA AI Event Data / Step 1. Specify the URL IP address of your 2N device, use HTTPS and make sure to switch  On Self-signed in the Settings >  Security section. -->

![33-step-1-specify-the-url-ip-address-of-your-2n-device-use-https-and-make-sure-to-switch-on-self-signed-in-the-settings-security-section.png](/img/integration/33-step-1-specify-the-url-ip-address-of-your-2n-device-use-https-and-make-sure-to-switch-on-self-signed-in-the-settings-security-section.png)

**35-keepalive.png**  
<!-- Source section: FTP Fields Naming Conventions for CAMMRA AI Event Data / Keepalive -->

![35-keepalive.png](/img/integration/35-keepalive.png)

**36-keepalive.png**  
<!-- Source section: FTP Fields Naming Conventions for CAMMRA AI Event Data / Keepalive -->

![36-keepalive.png](/img/integration/36-keepalive.png)

