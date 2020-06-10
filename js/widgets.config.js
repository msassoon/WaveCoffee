window._genesys = {
  widgets: {
    webchat: {
      transport: {
        type: 'purecloud-v2-sockets',
        dataURL: 'https://api.mypurecloud.ie',     // replace with API URL matching your region
        deploymentKey : '54dbe402-a67b-4e5e-96a0-1bcb843ce97a',  // replace with your Deployment ID
        orgGuid : '3b03b67a-2349-4a03-8b28-c8ac5c26c49a',              // replace with your Organization ID
        interactionData: {
          routing: {
            targetType: 'QUEUE',
            targetAddress: 'Chat Queue',
            priority: 2
          }
        }
      },
      userData: {
        addressStreet: '64472 Brown Street',
        addressCity: 'Lindgrenmouth',
        addressPostalCode: '50163-2735',
        addressState: 'FL',
        phoneNumber: '1-916-892-2045 x293',
        phoneType: 'Cell',
        customerId: '59606',
        // These fields should be provided via advanced configuration
        // firstName: 'Praenomen',
        // lastName: 'Gens',
        // email: 'praenomen.gens@calidumlitterae.com',
        // subject: 'Chat subject'
      }
    }
  }
};
