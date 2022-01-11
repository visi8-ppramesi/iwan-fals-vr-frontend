module.exports = {
  pluginOptions: {
    electronBuilder: {
      nodeIntegration: true,
      builderOptions: {
        productName: 'Iwan Fals VR Frontend',
        appId: 'com.ppramesi.iwanfalsvrfronend',
        win: {
          target: [
            {
              target: 'portable',
              arch: ['x64']
            }
          ]
        }
      }
    }
  }
}
