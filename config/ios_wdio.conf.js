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
              projectName: "Esmorga iOS",
              buildName: '1',
              sessionName: 'Pipe Test',
            },
            app: process.env.BROWSERSTACK_APP_ID,
          },
        ]
      ],
    capabilities: [{
        'bstack:options': {
            deviceName: 'iPhone 16',
            platformVersion: '1[678]',
            platformName: 'ios',
          },
        'appium:autoAcceptAlerts': true,
    }
],

}
