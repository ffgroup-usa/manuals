---
id: configuration-recognition-setup
title: Configuration
sidebar_position: 1
---
## Region of interest

Access the Application's Web Page: Launch a web browser and enter the URL or IP address of the CAMMRA AI application's web page.

Navigate to the Recognition Setup Tab: On the CAMMRA AI web page.

Define the Region of Interest (ROI): Usually 1 ROI is enough and enables smoothest functioning, but you can set 2 ROIs. When setting up the ROIs, it is recommended to keep them as much as possible in the centre of the camera view. Ideally whole vehicle fits into to the ROI. Avoid placing ROIs at the edges of the image, as this may impact the accuracy of the detection. Adjust each ROI to cover a specific area of interest within the camera's field of view.

Set the Car Movement Direction: To ensure correct tracking of car movement, orient the arrow in the direction of the traffic flow. The detected direction of the vehicles will be displayed in the Direction column within the Events log.

By following these steps, you can access the CAMMRA AI application's web page, navigate to the Recognition setup tab, define the region of interest, set the car movement direction, and adjust the arrow to indicate the preferred vehicle movement. These configurations enable CAMMRA AI to effectively monitor and analyze traffic data based on the specified settings.

## Location setup

On the RECOGNITION SETUP page, choose location settings according to the camera location. Correct regional settings will help CAMMRA AI application classify captured license plates.

Region: Choose the supported regions based on your deployment location. CAMMRA AI works in various regions of Europe (including Turkey and Israel), CIS, EU+CIS, GCC (Middle-East), South Africa, Australia, New Zealand, and both North and South America. In Asian countries the app was adjusted to LPR only and make and model recognition may achieve lower accuracy.

Preferred Country: select country where the camera is located.

Preferred State (for USA, Canada, Mexico): select state where the camera is located.

Note: preferred country and state selection will not limit recognition to the license plates of that country or state, but will help the algorithm to classify captured plates more accurately. Other countries from the regions are still recognized properly.

## Image settings

To configure CAMMRA AI for optimal performance, follow these steps:

Adjust Resolution:

For now only Full HD (1080p) is supported, no need to adjust

Set the Size of Saved Images: Configure the camera to save images at the desired size to meet your specific requirements. Consider factors such as storage capacity and image quality when determining the appropriate size for the saved images.

Enable Overlay Text: Toggle the overlay text feature to display additional information on the captured images. This overlay can include the day, month, year, time, license plate, and car brand and model.

## Recognition parameters

To access the settings in CAMMRA AI and customize the application according to your needs, follow these instructions:

Plate Width Min. and Max.: The plate width size settings determine the minimum and maximum width of license plates that CAMMRA AI will recognize. It is recommended to use these values unless specific adjustments are required: for Europe min width 100px, for USA - 80px.

Number of Symbols: Set the range for the minimum number of symbols in license plates for the region or country templates. It is advised to keep this range as narrow as possible to ensure accurate recognition based on regional license plate patterns.

LPR Confidence Threshold: Adjust the LPR confidence threshold to determine the minimum confidence level required for a license plate detection. A threshold of 0.65 to 0.7 is typically recommended, striking a balance between detection rate and false recognitions. Lower thresholds increase the detection rate but may also result in more false recognitions.

MMR Confidence Threshold: Set the confidence threshold for make and model recognition. The optimal threshold depends on the task CAMMRA AI needs to fulfill. For accurate make and model recognition, a recommended range is 30-60. For type classification, a range of 10 is suggested.

Comparison of Blacklisted Plates: Choose the type of comparison for blacklisted plates:

Strict Comparison: Only exact matches are considered for blacklisted plates.

Soft Comparison(By default): Allows for differences in one or two characters in the license plate while still considering it a match.

## Backup & Restore configuration

To create a safe backup of all your CAMMRA AI application settings, including license, use the “Backup configuration” feature. This will create a file storing all the settings that you can save at preferred location and then use it to restore in the application.

## Settings for Stored Events

To configure the storage settings for events in CAMMRA, follow these steps:

Select the Type of Events to be Stored: Choose the type of events that should be stored based on your requirements:

All: All events, including both whitelisted and blacklisted, will be stored.

Allow listed: Only events associated with whitelisted license plates will be stored.

Block listed: Only events associated with blacklisted license plates will be stored.

None: Events will not be stored but will be sent to third-party systems such as A1001, cloud storage, or VMS (Video Management Systems).

Determine the Storage Duration for Events: Specify the duration for which events should be stored in the CAMMRA AI system. Select from the following options:

No limit: Events will be stored indefinitely, allowing you to retain a complete historical record (depends on storage size).

1 day: Events will be stored for one day before being automatically deleted.

7 days: Events will be stored for seven days before being automatically deleted.

30 days: Events will be stored for 30 days before being automatically deleted.

Choose the storage duration that aligns with your storage capacity and the length of time you need to retain event data.

It's important to note that when a new event occurs, it will be assigned a storing time based on the current settings. Changing the storage settings will only affect new events and will not retroactively impact previously stored events.

By configuring these settings, you can manage which events are stored in CAMMRA AI and the duration for which they are retained. This allows you to optimize storage capacity and align event storage with your specific requirements.

When the camera operates using an SD card, it’s essential to regularly check the available storage, particularly if the card is shared with other applications.

Insufficient or minimal remaining storage can lead to unexpected application behavior.

## Security configuration

Security/HTTPS Settings:
To enhance the security of your CAMMRA AI application, you have the option to enable HTTPS encryption and use self-signed certificates. By turning on HTTPS encryption and utilizing self-signed certificates, you can ensure that the communication between the application and browsers is secure and protected. This helps safeguard the integrity and confidentiality of data transmission.

---

<!-- REVIEW: Images below were extracted from the original DOCX and placed automatically. Confirm placement and captions. -->

**10-region-of-interest.png**  
<!-- Source section: CAMMRA AI application setup / Recognition Setup / Region of interest -->

![10-region-of-interest.png](/img/configuration/10-region-of-interest.png)

**11-region-of-interest.png**  
<!-- Source section: CAMMRA AI application setup / Recognition Setup / Region of interest -->

![11-region-of-interest.png](/img/configuration/11-region-of-interest.png)

