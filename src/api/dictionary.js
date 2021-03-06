'use strict';
const htmlBodyValues = {
        apikey: 'f',
        sessionid: 's',
        devid: 'h',
        data: 'd',
        app_version: 'a',
        os_version: 'o',
        app_name: 'm',
        devManufacturer: 'q',
        hw_info: 'i',
        os_name: 'j',
        phone_number: 'p',
        phone_ext: 'x',
        access_token: 'w',
        event_data: 'e',
        label: 'z',
        value: 'k',
        client_date: 'c',
        tag: 'g',
        db_id: 'b',
        local_ip: 'r',
        event_name:'t',
        event_type: null
    };

    // TODO : Base on this dictionary create on app start dictionaries with all events and its measurements
const possibleDataInEvents = {
    // numbers in this arrays are links to labels dictionary in decode.js file
    'APP_START':[0,52],
    'APP_BG':[],
    'APP_FG':[],
    'APP_INACTIVE':[],
    'APP_ACTIVE':[],
    'APP_LMEM':[1,2],
    'APP_RNOTIFY':[3],
    'APP_LNOTIFY':[4],
    'APP_CRASH':[5,6,7,105,106,107],
    'NET_CHANGE':[8,9],
    'APP_KEEPALIVE':[],
    'APP_AUDIO_INT_START':[],
    'APP_AUDIO_INT_STOP':[],
    'APP_STOP':[],
    'APP_SIZE':[51],
    'DEVICE_SETTINGS_CHANGED':[113,114,115,116,117,118,119,120,121],

    'UI_VIEW':[10],
    'UI_EVENT':[11],
    'UI_ALERT':[12,13],

    'SIP_INIT':[14],
    'SIP_DESTROY':[15],
    'SIP_REG_STATE':[16,17],
    'SIP_CALL_STATE':[18,17,19,20],
    'SIP_MEDIA_STATE':[21,22,23],
    'SIP_TRANSPORT_STATE':[24,25,26],

    'RT_WEB_REQUEST':[27,28,29,30],
    'RT_WEB_RESPONSE':[31,32],
    'RT_WARNING':[33],
    'RT_LOGIN_START':[],
    'RT_LOGIN_RESULT':[34],
    'RT_SIP_REG_START':[],
    'RT_SIP_REG_RESULT':[35],
    'RT_OCALL_START':[19,18,0,46],
    'RT_ICALL_START':[19,18,0,46,52],
    'RT_CALL_ANSWER':[19,0,46,52],
    'RT_CALL_END':[0,36,37,38,39,19,43,45,44,47,46,52],
    'RT_BATTERY_LVL':[40,42],
    'RT_ERROR':[41],
    'RT_CHANGE_SERVER_ADDRESS':[48,49,50,0,52],
    'RT_FIVE_UNSUCCESSFUL_LOGIN_ATTEMPTS':[],
    'RT_CODEC_DETAILS':[54,55,56,57,58,59], //found bug 32213
    'ERROR_503':[],
    // Home Monitoring events
    'RT_PAIRING_MODE':[],
    'RT_DEVICE_PAIRED':[],
    'RT_DEVICE_UNPAIRED':[],
    'RT_DEVICE_UPDATED':[],
    'RT_MODE_CREATED':[],
    'RT_MODE_UPDATED':[],
    'RT_MODE_DELETED':[],
    'RT_OR_REQUEST':[],
    'RT_OR_FOUND':[],
    'RT_OR_CONNECTION':[],
    'RT_HMS_EVENT':[],

    // New Call event group
    'MEDIA_STATE':[21,22,23,60,61,46],
    'CALL_STATE':[18,17,19,20,46],
    'CALL_START':[19,18,0,62,46,83],
    'CALL_ANSWER':[19,0,46,52],
    'CALL_END':[0,23,36,37,38,39,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,19,43,108,123,45,44,47,46,52,83],
    'INVITE':[84,46],
    'RED_ACTIVATED':[85,46],
    'RED_LEVEL_CHANGED':[86,87,88,89,90,91,46],
    'RED_DEACTIVATED':[92,88,93,91,46],
    'USER_CALL_QUALITY':[95,96,97,98,99,100,101,102,103,46],
    'BAD_AUDIO_DETECTION':[46],
    'USER_RATING':[122,46],
    'CALL_DECLINED':[19,0,46,52],
    'CALL_MISSED':[19,0,46,52]
};

const webApiNodeAddresses = {
  production :'http://apiv2.ooma.com',
  sandbox:'http://api-sandbox.ooma.com',
  cert : 'http://api-qa.ooma.com',
  alpha : 'http://api-alpha.ooma.com',
  mera : 'http://api-mera.ooma.com',
  simon : 'http://api.simon.ooma.com',
  szeto : 'http://api-szeto.ooma.com',
  chen : 'http://api-chen.ooma.com',
  wong : 'http://api-wong.ooma.com',
  'apiv2.ooma.com':'http://apiv2.ooma.com',
  'api-sandbox.ooma.com':'http://api-sandbox.ooma.com',
  'api-qa.ooma.com' : 'http://api-qa.ooma.com',
  'api-alpha.ooma.com' : 'http://api-alpha.ooma.com',
  'api-mera.ooma.com' : 'http://api-mera.ooma.com',
  'api-simon.ooma.com' : 'http://api.simon.ooma.com',
  'api-szeto.ooma.com' : 'http://api-szeto.ooma.com',
  'api-chen.ooma.com' : 'http://api-chen.ooma.com',
  'api-wong.ooma.com' : 'http://api-wong.ooma.com',
  'api-frame.ooma.com' : 'http://api-frame.ooma.com',
  'api.hms.ooma.com' : 'http://api.hms.ooma.com'

};

const webApiValidationPaths = {
    office : '/v1/preferences?access_token=',
    oomahomemonitoring : '/v1/account/address?access_token=',
    mobile : '/v1/res/preferences/system?access_token='
};

exports.htmlBodyValues = htmlBodyValues;
exports.possibleDataInEvents = possibleDataInEvents;
exports.webApiNodeAddresses = webApiNodeAddresses;
exports.webApiValidationPaths = webApiValidationPaths;

