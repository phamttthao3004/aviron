const CONSTANTS = new function () {
    this.CAMERA_MODEL = window.CAMERA_MODEL;
    this.NAVIGATION_URL = new function () {
        this.HOME = window.ROOT_FILE + '/';
        this.LIVE = window.ROOT_FILE + '/live';
        this.SEARCH = window.ROOT_FILE + '/search';
        this.USER = window.ROOT_FILE + '/usermanagement';
        this.SETUP_VIDEO = window.ROOT_FILE + '/setup/video';
        this.SETUP_ENHANCED_CODEC = window.ROOT_FILE + '/setup/enhancedcodec';
        this.SETUP_MOTORIZED = window.ROOT_FILE + '/setup/motorized';
        this.SETUP_COMMUNICATION = window.ROOT_FILE + '/setup/communication';
        this.SETUP_COMMUNICATION_NETWORK = this.SETUP_COMMUNICATION + '/network';
        this.SETUP_COMMUNICATION_EMAIL = this.SETUP_COMMUNICATION + '/email';
        this.SETUP_COMMUNICATION_FTP = this.SETUP_COMMUNICATION + '/ftp';
        this.SETUP_COMMUNICATION_SMNP = this.SETUP_COMMUNICATION + '/snmp';
        this.SETUP_PRIVACY_ZONE = window.ROOT_FILE + '/setup/privacyzone';
        this.SETUP_OSD = window.ROOT_FILE + '/setup/osd';
        this.SETUP_STORAGE = window.ROOT_FILE + '/setup/storage';
        this.SETUP_EVENTS = window.ROOT_FILE + '/setup/events';
        this.SETUP_EVENTS_MOTION = this.SETUP_EVENTS + '/motion';
        this.SETUP_EVENTS_PIR = this.SETUP_EVENTS + '/pir';
        this.SETUP_EVENTS_WHITE_LED = this.SETUP_EVENTS + '/whiteled';
        this.SETUP_EVENTS_ALARM_IN = this.SETUP_EVENTS + '/alarmin';
        this.SETUP_EVENTS_ALARM_OUT = this.SETUP_EVENTS + '/alarmout';
        this.SETUP_EVENTS_SCHEDULE = this.SETUP_EVENTS + '/schedule';
        this.SETUP_EVENTS_DE_FOCUS = this.SETUP_EVENTS + '/defocus';
        this.SETUP_EVENTS_TAMPER = this.SETUP_EVENTS + '/tamper';
        this.SETUP_EVENTS_NETWORK = this.SETUP_EVENTS + '/network';
        this.SETUP_EVENTS_AUDIO = this.SETUP_EVENTS + '/audio';
        this.SETUP_EVENTS_SD_HEALTHINESS = this.SETUP_EVENTS + '/sdhealthiness';
        this.SETUP_EVENTS_SOUND_FILE = this.SETUP_EVENTS + '/soundfile';
        this.SETUP_VIDEO_ANALYTIC = window.ROOT_FILE + '/setup/videoanalytics';
        this.SETUP_VIDEO_ANALYTIC_GENERAL = this.SETUP_VIDEO_ANALYTIC + '/general';
        this.SETUP_VIDEO_ANALYTIC_PASS_THROUGH_COUNTER = this.SETUP_VIDEO_ANALYTIC + '/passthroughcounter';
        this.SETUP_VIDEO_ANALYTIC_CROSSED_LINE = this.SETUP_VIDEO_ANALYTIC + '/crossedline';
        this.SETUP_VIDEO_ANALYTIC_IDLES_IN_AREA = this.SETUP_VIDEO_ANALYTIC + '/idlesinarea';
        this.SETUP_VIDEO_ANALYTIC_ENTER_AREA = this.SETUP_VIDEO_ANALYTIC + '/enterarea';
        this.SETUP_IMAGE = window.ROOT_FILE + '/setup/image';
        this.SETUP_IMAGE_EXPOSURE = this.SETUP_IMAGE + '/exposure';
        this.SETUP_IMAGE_ADJUSTMENT = this.SETUP_IMAGE + '/adjustment';
        this.LOGS = window.ROOT_FILE + '/log';
        this.SYSTEM_INFO = window.ROOT_FILE + '/system-info';
    };
    this.MINIMUM_RESOLUTION = new function () {
        return {
            WIDTH: 1280,
            HEIGHT: 760
        }
    };
    this.SIDEBAR_PAGEID = new function () {
        return {
            LIVE: 1,
            SEARCH: 2,
            SETUP: 100,
            SETUP_VIDEO: 101,
            SETUP_IMAGE: 102,
            SETUP_COMMUNICATION: 103,
            SETUP_PRIVACY_ZONE: 104,
            SETUP_OSD: 105,
            SETUP_STORAGE: 106,
            SETUP_EVENTS: 107,
            SETUP_VIDEO_ANALYTICS: 108,
            SETUP_ENHANCED_CODEC: 109,
            SETUP_MOTORIZED: 110,
            SYSTEM_INFO: 3,
            LOGS: 4,
            USER: 5
        }
    };
    this.VOLUMN_AUDIO_IN = new function () {
        return {
            MIN: 1,
            MAX: 119,
            STEP: 1
        }
    };
    this.VOLUMN_AUDIO_OUT = new function () {
        return {
            MIN: 1,
            MAX: 119,
            STEP: 1
        }
    };
    this.ZOOM_MANUAL = new function () {
        this.AX_85 = new function () {
            return {
                MIN: 3.4,
                MAX: 9,
                STEP: 0.01,
                RANGE: 200,
                RATE: 560
            }
        }
        this.AX_76 = new function () {
            return {
                MIN: 2.7,
                MAX: 13.5,
                STEP: 0.01,
                RANGE: 200,
                RATE: 1080
            }
        }
    };
    this.FOCUS_MANUAL = new function () {
        return {
            MIN: 0,
            MAX: 100,
            STEP: 0.01
        }
    };
    this.STREAM_TYPE = new function () {
        return {
            PRIMARY: 1,
            SECONDARY: 2,
            THIRD: 3
        }
    };
    this.FACTORY_IP = "192.0.0.16";
    this.COMMUNICATION_PAGE = new function () {
        this.CURRENT_TAB = new function () {
            return {
                NONE: 0,
                NETWORK: 1,
                EMAIL: 2,
                FTP: 3,
                SMNP: 4
            }
        }
        this.MAX_LENGTH_32 = 32;
        this.MAX_LENGTH_64 = 64;
        this.MAX_LENGTH_199 = 199;
        this.DEFAULT_GATEWAY = "192.168.0.254";
        this.NETWORK = new function () {
            this.HTTP_PORT = new function () {
                this.DEFAULT = 0;
                this.MID = 1025;
                this.MIN = 80;
                this.MAX = 65535;
            }
            this.DHCP_VALUE = new function () {
                this.DHCP = "dhcp";
                this.MANUAL = "manual";
            }
            this.MESSAGE_CLOSE_WINDOW = "Close your browser and redirect to new IP Address assigned by DHCP Server.";
        }
        this.EMAIL = new function () {
            this.AUTH_METHOD = new function () {
                this.NO_AUTH = "no_auth";
                this.SMTP_PLAIN = "smtp_plain";
                this.LOGIN = "login";
                this.TLS_TTLS = "tls_ttls";
            }
            this.SMTP_PORT = new function () {
                this.DEFAULT = 0;
                this.MIN = 1;
                this.MAX = 65535;
            }
        }
        this.FTP = new function () {
            this.FTP_PORT = new function () {
                this.DEFAULT = 0;
                this.MID = 1025;
                this.MIN = 21;
                this.MAX = 65535;
            }
            this.FTP_MODE = new function () {
                this.ACTIVE = "active";
                this.PASSIVE = "passive";
            }
        }
        this.SNMP = new function () {
            this.AUTH_MODE = new function () {
                this.NONE = "none";
                this.SHA = "sha";
                this.MD5 = "md5";
            }
            this.PRIVACY_MODE = new function () {
                this.NONE = "none";
                this.DES = "des";
                this.AES = "aes";
            }
            this.TRAP_AUTH_MODE = new function () {
                this.OFF = "off";
                this.V1 = "v1";
                this.V2C = "v2c";
                this.V3 = "v3";
            }
            this.HEARTBEAT = new function () {
                this.MIN = 5;
                this.MAX = 600;
            }
        }
    };
    this.IMAGE_PAGE = new function () {
        this.CURRENT_TAB = new function () {
            return {
                NONE: 0,
                EXPOSURE: 1,
                ADJUSTMENT: 2
            }
        }
    };
    this.STREAMS_INFO = new function () {
        this.FPS = new function () {
            this.NTSC = new function () {
                this.MAX_30 = new function () {
                    this.CUSTOM = 'custom';
                    this.MAX = 30;
                    this.FPS_LIST = [
                        this.CUSTOM,
                        '30',
                        '15',
                        '10',
                        '7.5',
                        '3',
                        '1'
                    ];
                };
                this.MAX_20 = new function () {
                    this.CUSTOM = 'custom';
                    this.MAX = 20;
                    this.FPS_LIST = [
                        this.CUSTOM,
                        '20',
                        '15',
                        '10',
                        '7.5',
                        '3',
                        '1'
                    ];
                };
            };
            this.PAL = new function () {
                this.MAX_25 = new function () {
                    this.CUSTOM = 'custom';
                    this.MAX = 25;
                    this.FPS_LIST = [
                        this.CUSTOM,
                        '25',
                        '12.5',
                        '10',
                        '7.5',
                        '3',
                        '1'
                    ];
                };
                this.MAX_20 = new function () {
                    this.CUSTOM = 'custom';
                    this.MAX = 20;
                    this.FPS_LIST = [
                        this.CUSTOM,
                        '20',
                        '12.5',
                        '10',
                        '7.5',
                        '3',
                        '1'
                    ];
                };
            };
        }
        this.BITRATE_TYPE = new function () {
            return {
                VBR: 'cvbr',
                CBR: 'cbr'
            }
        }
        this.VIDEO_QUALITY = new function () {
            return {
                HIGH: 'high',
                MID: 'mid',
                LOW: 'low'
            }
        }
        this.PRIMARY = new function () {
            this.CODEC = new function () {
                return {
                    H265: 'h265',
                    H264: 'h264'
                };
            };
            this.RESOLUTION = new function () {
                this.AX_76 = new function () {
                    this.NTSC = new function () {
                        return [
                            '2592x1944',
                            '2688x1520',
                            '2048x1536',
                            '2304x1296',
                            '1920x1080',
                            '1280x960',
                            '1280x720',
                            '800x600',
                            '720x480',
                            '640x360',
                            '368x240'
                        ];
                    };
                    this.PAL = new function () {
                        return [
                            '2592x1944',
                            '2688x1520',
                            '2048x1536',
                            '2304x1296',
                            '1920x1080',
                            '1280x960',
                            '1280x720',
                            '800x600',
                            '720x576',
                            '640x360',
                            '368x288'
                        ];
                    };
                };
                this.AX_85 = new function () {
                    this.NTSC = new function () {
                        return [
                            '3840x2160',
                            '3264x1840',
                            '2592x1944',
                            '2688x1520',
                            '2048x1536',
                            '2304x1296',
                            '1920x1080',
                            '1280x960',
                            '1280x720',
                            '800x600',
                            '720x480',
                            '640x360',
                            '368x240'
                        ];
                    };
                    this.PAL = new function () {
                        return [
                            '3840x2160',
                            '3264x1840',
                            '2592x1944',
                            '2688x1520',
                            '2048x1536',
                            '2304x1296',
                            '1920x1080',
                            '1280x960',
                            '1280x720',
                            '800x600',
                            '720x576',
                            '640x360',
                            '368x288'
                        ];
                    };
                };
                this.AX_83C = new function () {
                    this.NTSC = new function () {
                        return [
                            '3840x2160',
                            '3264x1840',
                            '2592x1944',
                            '2688x1520',
                            '2048x1536',
                            '2304x1296',
                            '1920x1080',
                            '1280x960',
                            '1280x720',
                            '800x600',
                            '720x480',
                            '640x360',
                            '368x240'
                        ];
                    };
                    this.PAL = new function () {
                        return [
                            '3840x2160',
                            '3264x1840',
                            '2592x1944',
                            '2688x1520',
                            '2048x1536',
                            '2304x1296',
                            '1920x1080',
                            '1280x960',
                            '1280x720',
                            '800x600',
                            '720x576',
                            '640x360',
                            '368x288'
                        ];
                    };
                };
                this.AX_57 = new function () {
                    this.NTSC = new function () {
                        return [
                            '1920x1080',
                            '1280x960',
                            '1280x720',
                            '800x600',
                            '720x480',
                            '640x360',
                            '368x240'
                        ];
                    };
                    this.PAL = new function () {
                        return [
                            '1920x1080',
                            '1280x960',
                            '1280x720',
                            '800x600',
                            '720x576',
                            '640x360',
                            '368x288'
                        ];
                    };
                };
                this.AX_77 = new function () {
                    this.NTSC = new function () {
                        return [
                            '2592x1944',
                            '2688x1520',
                            '2048x1536',
                            '2304x1296',
                            '1920x1080',
                            '1280x960',
                            '1280x720',
                            '800x600',
                            '720x480',
                            '640x360',
                            '368x240'
                        ];
                    };
                    this.PAL = new function () {
                        return [
                            '2592x1944',
                            '2688x1520',
                            '2048x1536',
                            '2304x1296',
                            '1920x1080',
                            '1280x960',
                            '1280x720',
                            '800x600',
                            '720x576',
                            '640x360',
                            '368x288'
                        ];
                    };
                };
            };
            this.RESOLUTION_MAX_FPS_20 = new function () {
                return [
                    '2592x1944'
                ]
            }
        }
        this.SECONDARY = new function () {
            this.CODEC = new function () {
                return {
                    H265: 'h265',
                    H264: 'h264',
                    MJPEG: 'mjpeg'
                };
            };
            this.RESOLUTION_NONE = 'none';
            this.RESOLUTION = new function () {
                this.AX_76 = new function () {
                    this.NTSC = new function () {
                        return [
                            '800x600',
                            '720x480',
                            '640x360',
                            '368x240',
                            'none'
                        ];
                    };
                    this.PAL = new function () {
                        return [
                            '800x600',
                            '720x576',
                            '640x360',
                            '368x288',
                            'none'
                        ];
                    };
                };
                this.AX_85 = new function () {
                    this.NTSC = new function () {
                        return [
                            '800x600',
                            '720x480',
                            '640x360',
                            '368x240',
                            'none'
                        ];
                    };
                    this.PAL = new function () {
                        return [
                            '800x600',
                            '720x576',
                            '640x360',
                            '368x288',
                            'none'
                        ];
                    };
                };
                this.AX_83C = new function () {
                    this.NTSC = new function () {
                        return [
                            '800x600',
                            '720x480',
                            '640x360',
                            '368x240',
                            'none'
                        ];
                    };
                    this.PAL = new function () {
                        return [
                            '800x600',
                            '720x576',
                            '640x360',
                            '368x288',
                            'none'
                        ];
                    };
                };
                this.AX_57 = new function () {
                    this.NTSC = new function () {
                        return [
                            '800x600',
                            '720x480',
                            '640x360',
                            '368x240',
                            'none'
                        ];
                    };
                    this.PAL = new function () {
                        return [
                            '800x600',
                            '720x576',
                            '640x360',
                            '368x288',
                            'none'
                        ];
                    };
                };
                this.AX_77 = new function () {
                    this.NTSC = new function () {
                        return [
                            '800x600',
                            '720x480',
                            '640x360',
                            '368x240',
                            'none'
                        ];
                    };
                    this.PAL = new function () {
                        return [
                            '800x600',
                            '720x576',
                            '640x360',
                            '368x288',
                            'none'
                        ];
                    };
                };
            };
        }
        this.THIRD = new function () {
            this.CODEC = new function () {
                return {
                    H265: 'h265',
                    H264: 'h264',
                    MJPEG: 'mjpeg'
                };
            };
            this.RESOLUTION_NONE = 'none';
            this.RESOLUTION = new function () {
                this.AX_76 = new function () {
                    this.NTSC = new function () {
                        return [
                            '800x600',
                            '704x480',
                            '640x360',
                            '352x240',
                            'none'
                        ];
                    };
                    this.PAL = new function () {
                        return [
                            '800x600',
                            '704x576',
                            '640x360',
                            '352x288',
                            'none'
                        ];
                    };
                };
                this.AX_85 = new function () {
                    this.NTSC = new function () {
                        return [
                            '800x600',
                            '704x480',
                            '640x360',
                            '352x240',
                            'none'
                        ];
                    };
                    this.PAL = new function () {
                        return [
                            '800x600',
                            '704x576',
                            '640x360',
                            '352x288',
                            'none'
                        ];
                    };
                };
                this.AX_83C = new function () {
                    this.NTSC = new function () {
                        return [
                            '800x600',
                            '704x480',
                            '640x360',
                            '352x240',
                            'none'
                        ];
                    };
                    this.PAL = new function () {
                        return [
                            '800x600',
                            '704x576',
                            '640x360',
                            '352x288',
                            'none'
                        ];
                    };
                };
                this.AX_57 = new function () {
                    this.NTSC = new function () {
                        return [
                            '800x600',
                            '704x480',
                            '640x360',
                            '352x240',
                            'none'
                        ];
                    };
                    this.PAL = new function () {
                        return [
                            '800x600',
                            '704x576',
                            '640x360',
                            '352x288',
                            'none'
                        ];
                    };
                };
                this.AX_77 = new function () {
                    this.NTSC = new function () {
                        return [
                            '800x600',
                            '704x480',
                            '640x360',
                            '352x240',
                            'none'
                        ];
                    };
                    this.PAL = new function () {
                        return [
                            '800x600',
                            '704x576',
                            '640x360',
                            '352x288',
                            'none'
                        ];
                    };
                };
            };
        }
        this.STREAM_MODE = new function () {
            return {
                ECO_ZONE: 'EcoZone',
                ECO_ZONE_ECO_FRAME: 'EcoZone+EcoFrame'
            }
        }
    };
    this.TV_SYSTEM = new function () {
        return {
            NTSC: 'ntsc',
            PAL: 'pal'
        }
    };
    this.TV_OUTPUT = new function () {
        return {
            FULL: 'full',
            TV_16_9: '16_9',
            TV_4_3: '4_3'
        }
    };
    this.EVENT_PAGE = new function () {
        this.CURRENT_TAB = new function () {
            return {
                NONE: 0,
                MOTION: 1,
                PIR: 2,
                WHITE_LED: 3,
                ALARM_IN: 4,
                ALARM_OUT: 5,
                SCHEDULE: 6,
                DE_FOCUS: 7,
                TAMPER: 8,
                NETWORK: 9,
                AUDIO: 10,
                SD_HEALTHINESS: 11,
                SOUND_FILE: 12
            }
        }
        this.SOUND_FILE_STATUS = new function () {
            return {
                INSTALLED: "installed",
                DELETE: "delete",
                WRONG_FORMAT: "wrong_format",
                UPLOAD: "upload",
                NONE: "none",
            }
        }
        this.SOUND_FILE_AMOUNT = 10;
        this.SOUND_MODE = new function () {
            this.ONESHOT = 'one_shot';
            this.INFINITE = 'infinite';
        }
        this.SCHEDULE_TAB = new function () {
            this.TRIGGER_INTERVAL = new function () {
                return {
                    MIN: 1,
                    MAX: 3600,
                }
            }
            this.SUBJECT_EMAIL = new function () {
                return {
                    MAX_LENGTH: 32,
                }
            }
            this.MESSAGE_EMAIL = new function () {
                return {
                    MAX_LENGTH: 199,
                }
            }
        }
        this.NETWORK_TAB = new function () {
            this.NETWORK_MESSAGE = new function () {
                return {
                    MAX_LENGTH: 199,
                }
            }
        }
        this.AUDIO_TAB = new function () {
            this.CODEC_LIST = new function () {
                return [
                    { name: "G.711 a-law", value: "g711a" },
                    { name: "G.711 µ-law", value: "g711u" },
                    { name: "AAC", value: "aac" },
                ]
            };
            this.SUBJECT_EMAIL = new function () {
                return {
                    MAX_LENGTH: 32
                }
            }
            this.MESSAGE_EMAIL = new function () {
                return {
                    MAX_LENGTH: 199
                }
            }
            this.ON_SCREEN_TEXT = new function () {
                return {
                    MAX_LENGTH: 199
                }
            }
            this.SOUND_THRESHOLD = new function () {
                return {
                    MIN: 0,
                    MAX: 100,
                    STEP: 1
                }
            }
        }
        this.WHITE_LED_TAB = new function () {
            this.POST_DURATION = new function () {
                return {
                    MIN: 0,
                    MAX: 3600
                }
            }
        }
        this.TAMPER_TAP = new function () {
            this.SENSITIVITY_LIST = new function () {
                return [
                    { name: "Low", value: "low" },
                    { name: "Medium", value: "medium" },
                    { name: "High", value: "high" }
                ]
            }
            this.SUBJECT_EMAIL = new function () {
                return {
                    MAX_LENGTH: 32
                }
            }
            this.MESSAGE_EMAIL = new function () {
                return {
                    MAX_LENGTH: 199
                }
            }
            this.ON_SCREEN_TEXT = new function () {
                return {
                    MAX_LENGTH: 199
                }
            }
        }
        this.DE_FOCUS = new function () {

            this.SUBJECT_EMAIL = new function () {
                return {
                    MAX_LENGTH: 32
                }
            }
            this.MESSAGE_EMAIL = new function () {
                return {
                    MAX_LENGTH: 199
                }
            }
            this.ON_SCREEN_TEXT = new function () {
                return {
                    MAX_LENGTH: 199
                }
            }
        }
        this.PIR_ACTIVE_TYPE = new function () {
            return [
                {
                    name: "Normally open",
                    value: "no"
                },
                {
                    name: "Normally close",
                    value: "nc"
                },
            ]
        }
        this.SENSOR_ACTIVE_TYPE = new function () {
            return [
                {
                    name: "Normally open",
                    value: "no"
                },
                {
                    name: "Normally close",
                    value: "nc"
                },
            ]
        }
        this.ALARM_IN_TAP = new function () {
            this.OSD_TEXT = new function () {
                return {
                    MAX_LENGTH: 199,
                }
            }
            this.SUBJECT_EMAIL = new function () {
                return {
                    MAX_LENGTH: 32,
                }
            }
            this.MESSAGE_EMAIL = new function () {
                return {
                    MAX_LENGTH: 199,
                }
            }
        }
        this.ALARM_OUT_TAP = new function () {
            this.SENSOR_ACTIVE_TYPE = new function () {
                return [
                    {
                        name: "Normally open",
                        value: "no"
                    },
                    {
                        name: "Normally close",
                        value: "nc"
                    },
                ]
            }
            this.METHODS = new function () {
                return [{
                    name: "Pulse",
                    value: "pulse",
                }, {
                    name: "Normal",
                    value: "normal"
                }]
            }
            this.PURSE_ON_TIME = new function () {
                return {
                    MIN: 0.1,
                    MAX: 200
                }
            }
            this.PURSE_OFF_TIME = new function () {
                return {
                    MIN: 0.1,
                    MAX: 200
                }
            }
            this.PURSE_COUNT = new function () {
                return {
                    MIN: 1,
                    MAX: 9999
                }
            }
            this.POST_DURATION = new function () {
                return [
                    {
                        name: "Infinite",
                        value: "infinite"
                    },
                    {
                        name: 5,
                        value: 5
                    },
                    {
                        name: 10,
                        value: 10
                    },
                    {
                        name: 15,
                        value: 15
                    },
                    {
                        name: 30,
                        value: 30
                    },
                ]
            }
        }
        this.MOTION_TAP = new function () {
            this.VIDEO = new function () {
                return {
                    MAXIMUM_ELEMENT: 4
                }
            }
            this.SUBJECT_EMAIL = new function () {
                return {
                    MAX_LENGTH: 32
                }
            }
            this.MESSAGE_EMAIL = new function () {
                return {
                    MAX_LENGTH: 199
                }
            }
            this.ON_SCREEN_TEXT = new function () {
                return {
                    MAX_LENGTH: 199
                }
            }
        }
        this.SD_HEALTHINESS_TAP = new function () {
            this.SUBJECT_EMAIL = new function () {
                return {
                    MAX_LENGTH: 32
                }
            }
            this.MESSAGE_EMAIL = new function () {
                return {
                    MAX_LENGTH: 199
                }
            }
            this.OSD_TEXT = new function () {
                return {
                    MAX_LENGTH: 199
                }
            }
            this.WARNING_SIZE = new function () {
                return {
                    MIN: 50,
                    MAX: 1000,
                    STEP: 1
                }
            }
        }
    };
    this.LIVE_PAGE = new function(){
        this.VIDEO_ANALYTICS = new function(){
            return {
                OFF: 0,
                PASS_THROUGH_COUNTER: 1,
                IDLES_IN_AREA: 2,
                CROSSED_LINE: 3,
                ENTER_AREA: 4
            }           
        }        
    }
    this.VIDEO_ANALYTIC_PAGE = new function () {
        this.CURRENT_TAB = new function () {
            return {
                GENERAl: 0,
                PASS_THROUGH_COUNTER: 1,
                CROSS_LINE: 2,
                IDLES_AREA: 3,
                ENTER_AREA: 4
            }
        };
        this.SENSITIVITY = new function () {
            this.HIGH = "high";
            this.MID_HIGH = "medium-high";
            this.MID = "medium";
            this.MID_LOW = "medium-low";
            this.LOW = "low";
        };
        this.OBJECT_SIZE = new function () {
            this.MAX = "max";
            this.MIN = "min";
        };
        this.TRIGGER_INTERVAL_RANGE = new function () {
            this.MIN = 5;
            this.MAX = 300;
        };
        this.MAX_LENGTH_TEXT = 32;
        this.MAX_LENGTH_MESSAGE = 199;
        this.REVERSE = new function () {
            this.LEFT = "left";
            this.RIGHT = "right";
        };
        this.CROSSED_LINE_TAB = new function () {
            this.MAX_LINE = 3;
            this.ON_SCREEN_TEXT = new function () {
                return {
                    MAX_LENGTH: 199
                }
            }
        }
    };
    this.STREAM_GOP = new function () {
        return {
            MIN: 1,
            MAX: 60
        }
    };
    this.BITRATE_RANGE = new function () {
        this.H265 = new function () {
            this.MIN = 64;
            this.MAX = 8000;
        };
        this.H264 = new function () {
            this.MIN = 64;
            this.MAX = 20000;
        };
    };
    this.TOAST_TYPE = new function () {
        return {
            SUCCESS: 1,
            WARNING: 2,
            ERROR: 3
        }
    };
    this.MESSAGE_BOX_TYPE = new function () {
        return {
            ERROR: 1,
            WARNING: 2,
            INFO: 3,
            QUESTION: 4,
            SUCCESS: 5
        }
    };
    this.MESSAGE_BOX_BUTTON_TYPE = new function () {
        return {
            ONE_BUTTON: 1,
            TWO_BUTTON: 2,
            THREE_BUTTON: 3
        }
    };
    this.CHECKING_BY_REGEX = new function () {
        this.NAME = /^\s*[a-zA-Z0-9,\s._-]+\s*$/;
        this._SERVER = /^\s*[a-zA-Z0-9\s._-]+\s*$/;
        this.USER = /^\s*[a-zA-Z0-9\s@._-]+\s*$/;
    };
    this.CHANNEL_NAME = new function () {
        this.MAX = 32;
    };
    this.MIRROR_TYPE = new function () {
        this.FLIP = "flip";
        this.MIRROR = "mirror";
        this.BOTH = "both";
        this.OFF = "off";
    };
    this.CORRIDOR_TYPE = new function () {
        this.ON = "on";
        this.OFF = "off";
    };
    this.PRIVACY_ZONE_PAGE = new function () {
        this.ENABLE = new function () {
            this.ON = 'on';
            this.OFF = 'off';
        };
        this.COLOR = new function () {
            this.BLACK = 'black';
            this.GREY = 'grey';
            this.WHITE = 'white';
        };
        this.MAX_AREA = 8;
    };
    this.STORAGE_PAGE = new function () {
        this.STATUS = new function () {
            this.OK = "Normally Functioning";
            this.FAIL = "SD Card mounted failed";
            this.UNMOUNT = "Card Not Inserted";
            this.WARNING = "Free space is insufficient";
            this.FULL = "There is no free space";
            this.ERROR = "Memory blocks are all damage";
            this.ACCESS = "Access error occur";
            this.LIFETIME = "Has Reached its Lifetime";
            this.REPLACEMENT = "Replacement Recommended";
            this.LIFETIME_UNSUPPORTED = "lifetime notification unsupported";
            this.FAIL_GET_STATUS = "Failed to Get Status.";
        }
        this.SDCARD_CASE_STATUS = new function () {
            this.OK = "ok";
            this.FAIL = "fail";
            this.UNMOUNT = "umount";
            this.WARNING = "warning";
            this.FULL = "full";
            this.ERROR = "error";
            this.ACCESS = "access";
        }
        this.COLOR = new function () {
            this.GREEN = "green";
            this.GOLD = "gold";
            this.RED = "red";
            this.GREY = "#212121";
        }
        this.SNAPSHOT_STREAM = new function () {
            this.STREAM1 = "stream1";
            this.STREAM2 = "stream2";
            this.STREAM3 = "stream3";
        }
        this.EVENT_CAPTURE = new function () {
            return {
                MIN: 1,
                MAX: 10
            }
        };
        this.VIDEO_TYPE = new function () {
            this.AUDIOANDVIDEO = "audio_and_video";
            this.VIDEO = "video"
        }
        this.RECORDING_TYPE = new function () {
            this.ONESHOT = "one_shot";
            this.CONTINUOUS = "continuous";
            this.BACKUP = "backup";
        }
        this.CLIP_DURATION = new function () {
            this.ONE = "5";
            this.TWO = "10";
        }
        this.CLIP_SIZE = new function () {
            return {
                MIN: 50,
                MAX: 100
            }
        };
        this.RECORDING_CODEC = new function () {
            this.H264 = "h264";
            this.H265 = "h265";
        };
        this.PLATFORM = new function () {
            this.S3L = 's3l';
            this.S3LM = 's3lm';
        };
    };
    this.OSD_PAGE = new function () {
        this.OSD_1 = new function () {
            this.OFF = "off";
            this.DEVICE_NAME = "device_name";
        }
        this.OSD_2 = new function () {
            this.OFF = "off";
            this.DATE = "date";
        }
        this.BG_COLOR = new function () {
            this.TRANSPARENT = "transparent";
            this.BLACK = "black";
        }
        this.TEXT_COLOR = new function () {
            this.WHITE = "white";
            this.BLACK = "black";
        }
        this.LOCATION = new function () {
            this.MIN = 1;
            this.MAX = 10;
            this.STEP = 1;
        }
    };
    this.DELAY_TIME_RENDER_VIDEO = 500;
    this.EXPOSURE_PAGE = new function () {
        this.EXPOSURE_MODE = new function () {
            this.AUTO = "advanced";
            this.FLICKER_LESS = "flickerless";
            this.SHUTTER_PRIORITY = "shutter_priority";
            this.TRUE_WDR = "wdr";
            this.MANUAL = "manual";
        };
        this.MAX_SHUTTER_TIME = new function () {
            this.AX_76 = new function () {
                this.NTSC = new function () {
                    return [
                        "1",
                        "1/2",
                        "1/4",
                        "1/7.5",
                        "1/15",
                        "1/30",
                        "1/60",
                        "1/120",
                        "1/200",
                        "1/250",
                        "1/400",
                        "1/500",
                        "1/800",
                        "1/1000",
                        "1/2000",
                        "1/2500",
                        "1/4000",
                        "1/5000",
                        "1/8000"
                    ];
                };
                this.PAL = new function () {
                    return [
                        "1",
                        "1/2",
                        "1/4",
                        "1/6.25",
                        "1/12.5",
                        "1/25",
                        "1/50",
                        "1/100",
                        "1/200",
                        "1/250",
                        "1/400",
                        "1/500",
                        "1/800",
                        "1/1000",
                        "1/2000",
                        "1/2500",
                        "1/4000",
                        "1/5000",
                        "1/8000"
                    ];
                };
            };
            this.AX_85 = new function () {
                this.NTSC = new function () {
                    return [
                        "1/7.5",
                        "1/15",
                        "1/30",
                        "1/60"
                    ];
                };
                this.PAL = new function () {
                    return [
                        "1/6.25",
                        "1/12.5",
                        "1/25",
                        "1/50"
                    ];
                };
            };
            this.AX_83C = new function () {
                this.NTSC = new function () {
                    return [
                        "1/7.5",
                        "1/15",
                        "1/30",
                        "1/60"
                    ];
                };
                this.PAL = new function () {
                    return [
                        "1/6.25",
                        "1/12.5",
                        "1/25",
                        "1/50"
                    ];
                };
            };
        };
        this.MIN_SHUTTER_TIME = new function () {
            this.NTSC = new function () {
                return [
                    "1/120",
                    "1/200",
                    "1/250",
                    "1/400",
                    "1/500",
                    "1/800",
                    "1/1000",
                    "1/2000",
                    "1/2500",
                    "1/4000",
                    "1/5000",
                    "1/8000",
                    "1/10000"
                ];
            };
            this.PAL = new function () {
                return [
                    "1/100",
                    "1/200",
                    "1/250",
                    "1/400",
                    "1/500",
                    "1/800",
                    "1/1000",
                    "1/2000",
                    "1/2500",
                    "1/4000",
                    "1/5000",
                    "1/8000",
                    "1/10000"
                ];
            };
        };
        this.SHUTTER_SHUTTER_SPEED = new function () {
            this.NTSC = new function () {
                return [
                    "1/7.5",
                    "1/15",
                    "1/30",
                    "1/60",
                    "1/120",
                    "1/200",
                    "1/250",
                    "1/400",
                    "1/500",
                    "1/800",
                    "1/1000",
                    "1/2000",
                    "1/2500",
                    "1/4000",
                    "1/5000",
                    "1/8000",
                    "1/10000"
                ];
            };
            this.PAL = new function () {
                return [
                    "1/6.25",
                    "1/12.5",
                    "1/25",
                    "1/50",
                    "1/100",
                    "1/200",
                    "1/250",
                    "1/400",
                    "1/500",
                    "1/800",
                    "1/1000",
                    "1/2000",
                    "1/2500",
                    "1/4000",
                    "1/5000",
                    "1/8000",
                    "1/10000"
                ];
            };
        };
        this.MANUAL_SHUTTER_SPEED = new function () {
            this.NTSC = new function () {
                return [
                    "1/30",
                    "1/60",
                    "1/120",
                    "1/200",
                    "1/250",
                    "1/400",
                    "1/500",
                    "1/800",
                    "1/1000",
                    "1/2000",
                    "1/2500",
                    "1/4000",
                    "1/5000",
                    "1/8000",
                    "1/10000"
                ];
            };
            this.PAL = new function () {
                return [
                    "1/25",
                    "1/50",
                    "1/100",
                    "1/200",
                    "1/250",
                    "1/400",
                    "1/500",
                    "1/800",
                    "1/1000",
                    "1/2000",
                    "1/2500",
                    "1/4000",
                    "1/5000",
                    "1/8000",
                    "1/10000"
                ];
            };
        };
        this.EV = new function () {
            return [
                "-2",
                "-5/3",
                "-4/3",
                "-1",
                "-2/3",
                "-1/3",
                "0",
                "1/3",
                "2/3",
                "1",
                "4/3",
                "5/3",
                "2"
            ];
        };
        this.BLC = new function () {
            this.OFF = "off";
            this.UPPER = "upper";
            this.LOWER = "lower";
            this.CENTER_1_3 = "center_1_3";
            this.CENTER_1_6 = "center_1_6";
            this.LEFT = "left";
            this.RIGHT = "right";
        };
        this.WDR = new function () {
            this.OFF = "off";
            this.HIGH = "high";
            this.MEDIUM = "medium";
            this.LOW = "low";
        };
        this.IRIS_CONTROL = new function () {
            this.AUTO = "auto";
            this.MANUAL = "manual";
        };
        this.IRIS_LEVEL = new function () {
            return [
                1,
                2,
                3,
                4,
                5
            ];
        };
        this.GAIN_RANGE = new function () {
            return {
                MIN: 0,
                MAX: 36
            };
        };
        this.DAY_NIGHT = new function () {
            this.SWITCH_MODE = new function () {
                this.AUTO = "auto";
                this.COLOR = "color";
                this.BW = "b/w";
            };
            this.TIME = new function () {
                this.FAST = "fast";
                this.NORMAL = "normal";
                this.SLOW = "slow";
            };
            this.SENSITIVITY = new function () {
                return [
                    0,
                    1,
                    2,
                    3,
                    4,
                    5,
                    6
                ];
            };
        };
        this.IR_CONTROL = new function () {
            this.IR_MODEL = new function () {
                this.AUTO = "auto";
                this.ON = "on";
                this.OFF = "off";
            };
            this.SMART_IR = new function () {
                this.ON = "on";
                this.OFF = "off";
            };
            this.IR_LEVEL = new function () {
                this.ON = "on";
                this.OFF = "off";
            };
            this.ADJUSTABLE_RANGE = new function () {
                this.MIN = 10;
                this.MAX = 100;
            };
        };
        this.QUALITY = new function () {
            this.NOISE_REDUCTION = new function () {
                this.MIN = 0;
                this.MAX = 100;
            };
            this.GAMMA_RANGE = new function () {
                return [
                    0.45,
                    1
                ];
            };
            this.DEFOG = new function () {
                this.ON = "on";
                this.OFF = "off";
            };
        };
    };
    this.IMAGE_ADJUSTMENT_PAGE = new function () {
        this.ADJUSTMENT_RANGE = new function () {
            this.MIN = -100;
            this.MAX = 100;
        };
        this.SHARPNESS_RANGE = new function () {
            this.MIN = 0;
            this.MAX = 100;
        };
        this.QUALITY = new function () {
            this.NOISE_REDUCTION = new function () {
                this.MIN = 0;
                this.MAX = 100;
            };
            this.GAMMA_RANGE = new function () {
                return [
                    0.45,
                    1
                ];
            };
        };
        this.WHITE_BALANCE = new function () {
            this.MODE = new function () {
                this.ATW = 'atw';
                this.AUTO = 'auto';
                this.MANUAL = 'manual';
            };
            this.GAIN_RANGE = new function () {
                this.MIN = 0;
                this.MAX = 511;
            };
        }
    };
    this.DATE_TIME_FORMAT = new function () {
        this.DATE = "YYYY/MM/DD";
        this.TIME = "HH:mm";
        this.TIME_LONG = "HH:mm:ss";
        this.DATE_TIME = this.DATE + " " + this.TIME;
    };
    this.SYSTEM_INFO_PAGE = new function () {
        this.SYNC_MODE = new function () {
            this.MANUAL = "manual";
            this.NTP = "ntp";
            this.SYNC_WITH_PC = "sync_with_pc";
        };
        this.SYNC_PERIOD = new function () {
            return [
                24,
                12,
                6,
                1
            ];
        };
    };
    this.SEARCH_PAGE = new function () {
        this.VARIABLE = new function () {
            this.INIT = "init";
            this.PROCESS = "process";
            this.SUCCESS = "success";
            this.FAIL = "fail";
            this.NONE = "none";
        }
        this.MESSAGE = new function () {
            this.NODATA = "There is no data.";
            this.FAIL = "Fail to search data";
            this.SUCCESS = "Successfull";
            this.SEARCHING = "Searching";
        }
    };
    this.UPLOAD_STATUS = new function () {
        this.BEGIN = "begin";
        this.INSTALLING = "installing";
        this.FAIL = "fail";
        this.OK = "ok";
    };
    this.ENABLE_STATUS = "on";
    this.DISABLE_STATUS = "off";
    this.ROWS_PER_PAGE = new function () {
        return [
            5,
            10,
            25,
            50
        ];
    };
    this.USER_PAGE = new function () {
        this.GROUP_TYPE = new function () {
            return {
                ADMIN: 'admin',
                OPERATOR: 'operator',
                USER: 'user'
            };
        };
        this.PERMISSIONS = new function () {
            return [
                {
                    name: "Administrator",
                    value: "administrator",
                },
                {
                    name: "User",
                    value: "user",
                },
                {
                    name: "Operator",
                    value: "operator"
                }
            ]
        }
        this.MAX_USER = 5;
        this.USER_NAME = new function () {
            return {
                MAX: 16,
                MIN: 3,
            }
        }
        this.USER_PASS = new function () {
            return {
                MAX: 16,
                MIN: 3
            }
        }
    };
    this.SCHEDULE_ROW_NUMBER = 7;
    this.CANVAS = new function () {
        this.BACKGROUND_COLOR = "rgba(0, 0, 0, 0.4)";
    };
    this.SESSION_NAME = new function () {
        this.COLLAPSE = new function () {
            this.VIDEO = "collapse_video";
            this.EXPOSURE = "collapse_exposure";
            this.ADJUSTMENT = "collapse_adjustment";
            this.OSD = "collapse_osd";
        };
        this.COLLAPSE_LIST = new function () {
            this.VIDEO_LIST = new function () {
                this.PRIMARY = "primary";
                this.SECONDARY = "secondary";
                this.THIRD = "third";
                this.H264 = "h264";
            };
            this.EXPOSURE_LIST = new function () {
                this.EXPOSURE = "exposure";
                this.DAY_NIGHT = "day_night";
                this.IR_CONTROL = "ir_control";
                this.QUALITY = "quality";
            };
            this.ADJUSTMENT_LIST = new function () {
                this.COLOR = "color";
                this.QUALITY = "quality";
                this.WHITE_BALANCE = "white_balance";
            }
            this.OSD_LIST = new function () {
                this.CAMERA_NAME = "camera_name";
                this.DATE = "date";
                this.EVENT = "event";
            }
        }
    }
    this.ENHANCED_CODEC_PAGE = new function () {
        this.IZONE = {
            MAXIMUM_ELEMENT: 2
        }
    }
    this.MOTORIZED_PAGE = new function () {
        this.MODE = new function () {
            this.NORMAL = "simple";
            this.ADVANCED = "complex";
        }
    }
    this.EVENT_TYPES = new function () {
        this.EVENT_NOT_SUPPORT = ["Defocus", "Face", "Abandon", "Departure", "Withdrawn", "Adverse Way"];
        this.EVENT_TYPE_ALL = ["All","Motion", "Face", "Tamper", "Audio", "Defocus", "Schedule", "Alarm", "Idles in Area", "Enter Area", "Crossed Line", "Abandon", "Departure", "Withdrawn", "Adverse Way", "Network"];
        this.EVENT_TYPE_ALL_COLOR = ["#94d7d9", "#d99694", "#94b5d9", "#d994d7", "#d9b994", "#d99b45", "#9694d9", "#d99694", "#d76767", "#d7d767", "#94d996", "#fe4100", "#450978", "#1b3920"];
        this.EVENT_TYPE_FOR_SELECT = ["All", "Motion", "Tamper", "Audio", "Schedule", "Alarm", "Idles in Area", "Enter Area", "Crossed Line", "Network"]                                            
    }
};

export default CONSTANTS;