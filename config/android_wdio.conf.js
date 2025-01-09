const appPackage = 'cmm.apps.esmorga';
import { basic_config } from "./wdio.conf.js";
export const config = { ...basic_config, 
    services: [
      'appium',
        [
          'browserstack',
          {
            browserstackLocal: true,
            testObservabilityOptions: {
              projectName: "Esmorga Android",
              buildName: '1',
              sessionName: 'Pipe Test',
            },
            app: process.env.BROWSERSTACK_APK_ID,
          },
        ]
      ],
      capabilities: [{
        'bstack:options': {
          deviceName: 'Google Pixel 9',
          platformName: 'android',
        },
      
      }],

}
