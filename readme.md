**This is a plugin for the [OVMS module](https://github.com/openvehicles/Open-Vehicle-Monitoring-System-3) which bypass confirmation screen on Nissan Leaf using OVMS.**

**How to use:**
1. Upload nowo.js in the folder /store/scripts using UI 
2. Check if the file ovmsmain.js exists /store/scripts
3. if it doesn't exist create it or upload existing from repository
4. Restart the module

**Note:** The default cable that is shiped with OMVS doesn't have connection for the can3 to Nissan's AV-CAN, therefore it is required to add two extra conections to AV-CAN.

![Nissan Leaf OBD2 pinout](./leaf-can-pinout.jpg)

**Pinout:** J1962-M / DB9-F Signal\
4 - 3 Chassis/Power GND\
6 - 5 CAN-H (ALTERNATE CAN)\
14 - 4 CAN-L (ALTERNATE CAN)\
13 - 7 CAN-H (primary CAN)\
12 - 2 CAN-L (primary CAN)\
**11 - 8 CAN-H (AV CAN)**\
**3 - 6 CAN-L (AV CAN)**\
16 - 9 +12V Vehicle Power

