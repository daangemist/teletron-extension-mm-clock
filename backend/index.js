const path = require('node:path');
const { start } = require('@teletron/magic-mirror-wrapper-node');

async function extensionStart(extensionManager) {
  await start(
    'clock',
    'mm-clock',
    extensionManager,
    path.join(__dirname, '../mm-clock')
  );

  // Add the component configuration
  extensionManager.components.add({
    name: 'clock',
    displayName: 'Clock',
    configuration: {
      fields: [
        {
          attribute: 'displayType',
          type: 'enum',
          options: { both: 'Both', digital: 'Digital', analog: 'Analog' },
          required: false,
          label: 'Display a digital clock, analog clock, or both together. ',
          initialValue: 'digital',
        },
        {
          attribute: 'timeFormat',
          type: 'enum',
          required: true,
          label: 'Use 12 or 24 hour format.',
          options: { 24: '24', 12: '12' },
          initialValue: '24',
          multiple: false,
          required: true,
        },
        {
          attribute: 'timezone',
          type: 'text',
          required: false,
          label: 'Specific a timezone to show clock',
          help: 'Possible examples values: America/New_York, America/Santiago, Etc/GMT+10. Check https://momentjs.com/timezone/docs/#/data-formats/packed-format/ for more samples.',
        },
        {
          attribute: 'displaySeconds',
          type: 'boolean',
          required: false,
          label: 'Display seconds.',
          initialValue: true,
        },
        {
          attribute: 'showPeriod',
          type: 'boolean',
          required: false,
          label: 'Show the period (am/pm) with 12 hour format.',
        },
        {
          attribute: 'showPeriodUpper',
          type: 'boolean',
          required: false,
          label: 'Show the period (AM/PM) with 12 hour format as uppercase.',
        },
        {
          attribute: 'clockBold',
          type: 'boolean',
          required: false,
          label:
            'Remove the colon and bold the minutes to make a more modern look. ',
        },
        {
          attribute: 'showTime',
          type: 'boolean',
          required: false,
          label: 'Turn off or on the Time section.',
          initialValue: true,
        },
        {
          attribute: 'showDate',
          type: 'boolean',
          required: false,
          label: 'Turn off or on the Date section.',
          initialValue: true,
        },
        {
          attribute: 'showWeek',
          type: 'boolean',
          required: false,
          label: 'Turn off or on the Week section.',
          initialValue: false,
        },
        {
          attribute: 'showSunTimes',
          type: 'boolean',
          required: false,
          label:
            'Turn off or on the section showing sunrise and sunset times (digital clock only).',
          initialValue: false,
        },
        {
          attribute: 'showMoonTimes',
          type: 'boolean',
          required: false,
          label:
            'Turn off or on the section showing moonrise and moonset times (digital clock only).',
          initialValue: false,
        },
        {
          attribute: 'lat',
          type: 'text',
          required: false,
          label: 'Latitude for sun/moon calculations',
          initialValue: '47.630539',
        },
        {
          attribute: 'lon',
          type: 'text',
          required: false,
          label: 'Longitude for sun/moon calculations',
          initialValue: '-122.344147',
        },
        {
          attribute: 'dateFormat',
          type: 'text',
          required: false,
          label: 'Longitude for sun/moon calculations',
          help: 'Read for more info: https://momentjs.com/docs/#/displaying/format/',
          initialValue: 'dddd, LL',
        },
        {
          attribute: 'analogSize',
          type: 'text',
          required: false,
          label: 'Defines how large the analog display is.',
          help: 'Specific to the analog clock. A positive number of pixels, e.g. 200px',
        },
        {
          attribute: 'analogFace',
          type: 'enum',
          options: {
            simple: 'Simple',
            none: 'None',
            'face-001': 'Face 001',
            'face-002': 'Face 002',
            'face-003': 'Face 003',
            'face-004': 'Face 004',
            'face-005': 'Face 005',
            'face-006': 'Face 006',
            'face-007': 'Face 007',
            'face-008': 'Face 008',
            'face-009': 'Face 009',
            'face-010': 'Face 010',
            'face-011': 'Face 011',
            'face-012': 'Face 012',
          },
          required: false,
          label: 'Specifies which clock face to use.',
          help: 'Specific to the analog clock.',
        },
        {
          attribute: 'secondsColor',
          type: 'color',
          required: false,
          label: "Specifies what color to make the 'seconds' hand.",
          help: 'Specific to the analog clock.',
        },
        {
          attribute: 'analogPlacement',
          type: 'enum',
          options: {
            top: 'Top',
            right: 'Right',
            bottom: 'Bottom',
            left: 'Left',
          },
          required: false,
          label:
            'Specifies where the analog clock is in relation to the digital clock ',
          help: "Specific to the analog clock, requires displayType set to 'both'",
        },
      ],
    },
  });

  // Tell Teletron where to read the web scripts, the folder is ./web in this example. The second parameter is the files to load.
  // web.umd.js is the umd version of the @teletron/magic-mirror-wrapper-web, web.js is the custom initialization script, and web.css
  // is the css file, also from the @teletron/magic-mirror-wrapper-web package.
  extensionManager.assets(path.join(__dirname, '../web'), [
    'web.umd.js',
    'web.js',
    'web.css',
    'clock.css',
  ]);
}

module.exports = extensionStart;
