#Transparent keyboard on iPhone 4 plus updateKeyboard not working

Setting `<preference name="HideKeyboardFormAccessoryBar" value="true" />` will make the keyboard transparent on iPhone 4 running iOS 7.1 (doesn't replicate on iPhone 5 or iOS Simulator).

Furthermore, setting `<preference name="HideKeyboardFormAccessoryBar" value="true" />` and then calling     `steroids.view.updateKeyboard({accessoryBarEnabled:true});` doesn't show the accessory bar on any device.
