const CONSTANTS = new (function() {
    this.NAVIGATION_URL = new (function() {
        this.ROOT_FILE = '';
        this.LOGIN = '/login.html';
        this.HOME = `${this.ROOT_FILE}/`;
        this.NOT_FOUND = `${this.ROOT_FILE}/not-found`;
        this.PROFILE = `${this.ROOT_FILE}/profile`;
        this.PROFILE_OVERVIEW = `${this.PROFILE}/overview`;
        this.PROFILE_WORKOUT = `${this.PROFILE}/workout`;
        this.PROFILE_ACHIEVEMENT = `${this.PROFILE}/achievement`;
        this.PROFILE_BASICINFO = `${this.PROFILE}/basicinfo`;
        this.EQUIPMENT = `${this.ROOT_FILE}/equipment`;
        this.EQUIPMENT_OVERVIEW = `${this.EQUIPMENT}/overview`;
        this.EQUIPMENT_ANALYSIS = `${this.EQUIPMENT}/analysis`;
        this.SUBSCRIPTION = `${this.ROOT_FILE}/subscription`;
        this.RECEIPT = `${this.ROOT_FILE}/receipt`;
        this.RECEIPT_DETAIL = `${this.RECEIPT}/:id`;
        this.PRODUCT = `${this.ROOT_FILE}/product`;
        this.PRODUCT_IMPACT = `${this.PRODUCT}/impact-series-rower`;
        this.PRODUCT_TOUCH = `${this.PRODUCT}/touch-series-rower`;
        this.MEMBERSHIP = `${this.ROOT_FILE}/membership`;
        this.MEMBERSHIP_SUB = `${this.MEMBERSHIP}/:id`;
        this.CHECKOUT = `${this.ROOT_FILE}/checkout`;
        this.CHECKOUT_INFORMATION = `${this.CHECKOUT}/checkout-information`;
        this.CHECKOUT_PAYMENT_METHOD = `${this.CHECKOUT}/checkout-payment-method`;
        this.CHECKOUT_REVIEW_ORDER = `${this.CHECKOUT}/checkout-review-order`;
    })();
    this.SIDEBAR_PAGEID = new (function() {
        this.NONE = -1;
        this.PROFILE = 100;
        this.EQUIPMENT = 200;
        this.SUBSCRIPTION = 300;
        this.RECEIPT = 400;
        this.RECEIPT_DETAIL = 400;
        this.PRODUCT = 500;
        this.MEMBERSHIP = 600;
        this.CHECKOUT = 700;
    })();
    this.SUBSCRIPTION_PAGE = new (function() {
        this.CURRENT_TAB = new (function() {
            this.SUBSCRIPTION_LIST = 0;
            this.SUBSCRIPTION_GET = 1;
        })();

        this.PERIOD_TIME = new (function() {
            this.MONTH_1 = '1';
            this.MONTHS_3 = '3';
            this.MONTHS_6 = '6';
            this.MONTHS_12 = '12';
        })();
        this.SUBSCRIPTION_TYPE = new (function() {
            this.PERSONAL = 'personal';
            this.GYM_ROOM = 'gymroom';
            this.SALER = 'saler';
        })();
    })();
    this.PROFILE_PAGE = new (function() {
        this.CURRENT_TAB = new (function() {
            this.NONE = -1;
            this.PROFILE_OVERVIEW = 0;
            this.PROFILE_WORKOUT = 1;
            this.PROFILE_ACHIEVEMENT = 2;
            this.PROFILE_BASICINFO = 3;
        })();
        this.TRIGGER_INTERVAL = new (function() {
            return {
                MIN: 0,
                MAX: 9999
            };
        })();
        this.GENDER = new (function() {
            this.MALE = 'male';
            this.FEMALE = 'female';
            this.OTHER = 'other';
        })();
        this.HEIGHT_UNITS = new (function() {
            return {
                IN: 'in',
                METERS: 'meters'
            };
        })();
        this.WEIGHT_UNITS = new (function() {
            return {
                LBS: 'lbs',
                KGS: 'kgs'
            };
        })();
        this.MAXXIMUM_MB_IMAGE_SUPPORT = 2;
        this.SRC_NO_AVATAR = '/images/user/no-avatar.png';
    })();
    this.EQUIPMENT_PAGE = new (function() {
        this.CURRENT_TAB = new (function() {
            this.NONE = -1;
            this.EQUIPMENT_OVERVIEW = 0;
            this.EQUIPMENT_ANALYSIS = 1;
        })();
    })();
    this.RECEIPT_PAGE = new (function() {
        this.CURRENT_TAB = new (function() {
            this.NONE = -1;
            this.RECEIPT = 0;
            this.RECEIPT_DETAIL = 1;
        })();
    })();
    this.PRODUCT_PAGE = new (function() {
        this.CURRENT_TAB = new (function() {
            this.NONE = -1;
            this.PRODUCT_IMPACT = 0;
            this.PRODUCT_TOUCH = 1;
        })();
    })();
    this.MEMBERSHIP_PAGE = new (function() {
        this.CURRENT_TAB = new (function() {
            this.NONE = -1;
            this.PERSONAL = 0;
            this.COMMERCIAL = 1;
        })();
    })();
    this.CHECKOUT_PAGE = new (function() {
        this.CURRENT_TAB = new (function() {
            this.NONE = -1;
            this.CHECKOUT_INFORMATION = 0;
            this.CHECKOUT_PAYMENT_METHOD = 1;
            this.CHECKOUT_REVIEW_ORDER = 2;
        })();
    })();
    this.USER = new (function() {
        this.ROLE = new (function() {
            this.NORMAL_USER = 'authenticated';
            this.ADMIN = 'administrator';
            this.EDITOR = 'editor';
        })();
    })();
    this.SESSION_NAME = new (function() {
        this.ACCESS_TOKEN = 'ACCESS_TOKEN';
        this.USER_INFO = 'USER_INFO';
    })();
    this.FORMAT_DATE = new (function() {
        return 'mm/dd/yyyy';
    })();
    this.MESSAGE_BOX_TYPE = new (function() {
        this.ERROR = 1;
        this.WARNING = 2;
        this.INFO = 3;
        this.QUESTION = 4;
        this.SUCCESS = 5;
    })();
    this.MESSAGE_BOX_BUTTON_TYPE = new (function() {
        this.ONE_BUTTON = 1;
        this.TWO_BUTTON = 2;
        this.THREE_BUTTON = 3;
        this.NONE_BUTTON = 4;
    })();
    this.PASSWORD_API_ACTION = new (function() {
        this.RESET_PASSWORD = 'resetPwdLong';
        this.SEND_RESET_PASSWORD = 'sendResetPwd';
        this.CHANGE_PASSWORD = 'passwordChange';
    })();
    this.EMAIL_API = new (function() {
        this.VERIFY_SIGNUP_LONG = 'verifySignupLong';
        this.RESEND_VERIFY_SIGNUP = 'resendVerifySignup';
        this.CHANGE_EMAIL = 'identityChange';
        this.CHECK_UNIQUE = 'checkUnique';
    })();
    this.STORAGE_NAME = new (function() {
        this.ACCESS_TOKEN_KEY_NAME = 'ACCESS_TOKEN';
        this.USER_INFO = 'USER_INFO';
    })();
    this.INPUT_LENGTH = new (function() {
        this.PASSWORD_MIN = 6;
    })();
    this.NOTIFY_USER = new (function() {
        this.PASSWORD_LENGTH = 'Password must be at least {0} characters';
        this.CONFIRM_PASSWORD_ERROR = "Those passwords didn't match. Try again.";
        this.EMAIL = new (function() {
            this.VERIFY_FAIL = 'Verify fail!';
            this.VERIFY_SUCCESS = 'Verify Successfully!';
            this.YOUR_EMAIL_VERIFIED = 'Your email verified!';
            this.YOUR_EMAIL_VERIFIED_NOTE = 'Your email is only verified once';
            this.SEND_SUCCESS = 'Send Successfully!';
            this.SEND_SUCCESS_NOTE = 'Please check your email to verify';
            this.SEND_FAIL = 'Send mail not success!';
            this.SEND_FAIL_NOTE = 'Try again!';
            this.EMAIL_NOT_VERIFY = 'Your email not verify!';
            this.EMAIL_NOT_VERIFY_NOTE = 'Please check your email to verify';
            this.CHECK_EMAIL_TO_RESET_PASSWORD = 'Please check your email to reset password';
        })();
    })();
    this.SERVER_ERROR = new (function() {
        this.GENERAL = new (function() {
            this.BAD_REQUEST = 'bad-request';
        })();
        this.EMAIL = new (function() {
            this.IS_NOT_VERIFIED = 'isNotVerified';
        })();
    })();
    this.COUNTRIES = new (function() {
        return [
            { id: 'AF', name: 'Afghanistan' },
            { id: 'AX', name: 'Aland Islands' },
            { id: 'AL', name: 'Albania' },
            { id: 'DZ', name: 'Algeria' },
            { id: 'AS', name: 'American Samoa' },
            { id: 'AD', name: 'Andorra' },
            { id: 'AO', name: 'Angola' },
            { id: 'AI', name: 'Anguilla' },
            { id: 'AQ', name: 'Antarctica' },
            { id: 'AG', name: 'Antigua And Barbuda' },
            { id: 'AR', name: 'Argentina' },
            { id: 'AM', name: 'Armenia' },
            { id: 'AW', name: 'Aruba' },
            { id: 'AU', name: 'Australia' },
            { id: 'AT', name: 'Austria' },
            { id: 'AZ', name: 'Azerbaijan' },
            { id: 'BS', name: 'Bahamas' },
            { id: 'BH', name: 'Bahrain' },
            { id: 'BD', name: 'Bangladesh' },
            { id: 'BB', name: 'Barbados' },
            { id: 'BY', name: 'Belarus' },
            { id: 'BE', name: 'Belgium' },
            { id: 'BZ', name: 'Belize' },
            { id: 'BJ', name: 'Benin' },
            { id: 'BM', name: 'Bermuda' },
            { id: 'BT', name: 'Bhutan' },
            { id: 'BO', name: 'Bolivia' },
            { id: 'BA', name: 'Bosnia And Herzegovina' },
            { id: 'BW', name: 'Botswana' },
            { id: 'BV', name: 'Bouvet Island' },
            { id: 'BR', name: 'Brazil' },
            { id: 'IO', name: 'British Indian Ocean Territory' },
            { id: 'BN', name: 'Brunei Darussalam' },
            { id: 'BG', name: 'Bulgaria' },
            { id: 'BF', name: 'Burkina Faso' },
            { id: 'BI', name: 'Burundi' },
            { id: 'KH', name: 'Cambodia' },
            { id: 'CM', name: 'Cameroon' },
            { id: 'CA', name: 'Canada' },
            { id: 'CV', name: 'Cape Verde' },
            { id: 'KY', name: 'Cayman Islands' },
            { id: 'CF', name: 'Central African Republic' },
            { id: 'TD', name: 'Chad' },
            { id: 'CL', name: 'Chile' },
            { id: 'CN', name: 'China' },
            { id: 'CX', name: 'Christmas Island' },
            { id: 'CC', name: 'Cocos (Keeling) Islands' },
            { id: 'CO', name: 'Colombia' },
            { id: 'KM', name: 'Comoros' },
            { id: 'CG', name: 'Congo' },
            { id: 'CD', name: 'Congo Democratic Republic' },
            { id: 'CK', name: 'Cook Islands' },
            { id: 'CR', name: 'Costa Rica' },
            { id: 'CI', name: 'Cote D"Ivoire' },
            { id: 'HR', name: 'Croatia' },
            { id: 'CU', name: 'Cuba' },
            { id: 'CY', name: 'Cyprus' },
            { id: 'CZ', name: 'Czech Republic' },
            { id: 'DK', name: 'Denmark' },
            { id: 'DJ', name: 'Djibouti' },
            { id: 'DM', name: 'Dominica' },
            { id: 'DO', name: 'Dominican Republic' },
            { id: 'EC', name: 'Ecuador' },
            { id: 'EG', name: 'Egypt' },
            { id: 'SV', name: 'El Salvador' },
            { id: 'GQ', name: 'Equatorial Guinea' },
            { id: 'ER', name: 'Eritrea' },
            { id: 'EE', name: 'Estonia' },
            { id: 'ET', name: 'Ethiopia' },
            { id: 'FK', name: 'Falkland Islands (Malvinas)' },
            { id: 'FO', name: 'Faroe Islands' },
            { id: 'FJ', name: 'Fiji' },
            { id: 'FI', name: 'Finland' },
            { id: 'FR', name: 'France' },
            { id: 'GF', name: 'French Guiana' },
            { id: 'PF', name: 'French Polynesia' },
            { id: 'TF', name: 'French Southern Territories' },
            { id: 'GA', name: 'Gabon' },
            { id: 'GM', name: 'Gambia' },
            { id: 'GE', name: 'Georgia' },
            { id: 'DE', name: 'Germany' },
            { id: 'GH', name: 'Ghana' },
            { id: 'GI', name: 'Gibraltar' },
            { id: 'GR', name: 'Greece' },
            { id: 'GL', name: 'Greenland' },
            { id: 'GD', name: 'Grenada' },
            { id: 'GP', name: 'Guadeloupe' },
            { id: 'GU', name: 'Guam' },
            { id: 'GT', name: 'Guatemala' },
            { id: 'GG', name: 'Guernsey' },
            { id: 'GN', name: 'Guinea' },
            { id: 'GW', name: 'Guinea-Bissau' },
            { id: 'GY', name: 'Guyana' },
            { id: 'HT', name: 'Haiti' },
            { id: 'HM', name: 'Heard Island & Mcdonald Islands' },
            { id: 'VA', name: 'Holy See (Vatican City State)' },
            { id: 'HN', name: 'Honduras' },
            { id: 'HK', name: 'Hong Kong' },
            { id: 'HU', name: 'Hungary' },
            { id: 'IS', name: 'Iceland' },
            { id: 'IN', name: 'India' },
            { id: 'ID', name: 'Indonesia' },
            { id: 'IR', name: 'Iran Islamic Republic Of' },
            { id: 'IQ', name: 'Iraq' },
            { id: 'IE', name: 'Ireland' },
            { id: 'IM', name: 'Isle Of Man' },
            { id: 'IL', name: 'Israel' },
            { id: 'IT', name: 'Italy' },
            { id: 'JM', name: 'Jamaica' },
            { id: 'JP', name: 'Japan' },
            { id: 'JE', name: 'Jersey' },
            { id: 'JO', name: 'Jordan' },
            { id: 'KZ', name: 'Kazakhstan' },
            { id: 'KE', name: 'Kenya' },
            { id: 'KI', name: 'Kiribati' },
            { id: 'KR', name: 'Korea' },
            { id: 'KW', name: 'Kuwait' },
            { id: 'KG', name: 'Kyrgyzstan' },
            { id: 'LA', name: 'Lao People"s Democratic Republic' },
            { id: 'LV', name: 'Latvia' },
            { id: 'LB', name: 'Lebanon' },
            { id: 'LS', name: 'Lesotho' },
            { id: 'LR', name: 'Liberia' },
            { id: 'LY', name: 'Libyan Arab Jamahiriya' },
            { id: 'LI', name: 'Liechtenstein' },
            { id: 'LT', name: 'Lithuania' },
            { id: 'LU', name: 'Luxembourg' },
            { id: 'MO', name: 'Macao' },
            { id: 'MK', name: 'Macedonia' },
            { id: 'MG', name: 'Madagascar' },
            { id: 'MW', name: 'Malawi' },
            { id: 'MY', name: 'Malaysia' },
            { id: 'MV', name: 'Maldives' },
            { id: 'ML', name: 'Mali' },
            { id: 'MT', name: 'Malta' },
            { id: 'MH', name: 'Marshall Islands' },
            { id: 'MQ', name: 'Martinique' },
            { id: 'MR', name: 'Mauritania' },
            { id: 'MU', name: 'Mauritius' },
            { id: 'YT', name: 'Mayotte' },
            { id: 'MX', name: 'Mexico' },
            { id: 'FM', name: 'Micronesia Federated States Of' },
            { id: 'MD', name: 'Moldova' },
            { id: 'MC', name: 'Monaco' },
            { id: 'MN', name: 'Mongolia' },
            { id: 'ME', name: 'Montenegro' },
            { id: 'MS', name: 'Montserrat' },
            { id: 'MA', name: 'Morocco' },
            { id: 'MZ', name: 'Mozambique' },
            { id: 'MM', name: 'Myanmar' },
            { id: 'NA', name: 'Namibia' },
            { id: 'NR', name: 'Nauru' },
            { id: 'NP', name: 'Nepal' },
            { id: 'NL', name: 'Netherlands' },
            { id: 'AN', name: 'Netherlands Antilles' },
            { id: 'NC', name: 'New Caledonia' },
            { id: 'NZ', name: 'New Zealand' },
            { id: 'NI', name: 'Nicaragua' },
            { id: 'NE', name: 'Niger' },
            { id: 'NG', name: 'Nigeria' },
            { id: 'NU', name: 'Niue' },
            { id: 'NF', name: 'Norfolk Island' },
            { id: 'MP', name: 'Northern Mariana Islands' },
            { id: 'NO', name: 'Norway' },
            { id: 'OM', name: 'Oman' },
            { id: 'PK', name: 'Pakistan' },
            { id: 'PW', name: 'Palau' },
            { id: 'PS', name: 'Palestinian Territory Occupied' },
            { id: 'PA', name: 'Panama' },
            { id: 'PG', name: 'Papua New Guinea' },
            { id: 'PY', name: 'Paraguay' },
            { id: 'PE', name: 'Peru' },
            { id: 'PH', name: 'Philippines' },
            { id: 'PN', name: 'Pitcairn' },
            { id: 'PL', name: 'Poland' },
            { id: 'PT', name: 'Portugal' },
            { id: 'PR', name: 'Puerto Rico' },
            { id: 'QA', name: 'Qatar' },
            { id: 'RE', name: 'Reunion' },
            { id: 'RO', name: 'Romania' },
            { id: 'RU', name: 'Russian Federation' },
            { id: 'RW', name: 'Rwanda' },
            { id: 'BL', name: 'Saint Barthelemy' },
            { id: 'SH', name: 'Saint Helena' },
            { id: 'KN', name: 'Saint Kitts And Nevis' },
            { id: 'LC', name: 'Saint Lucia' },
            { id: 'MF', name: 'Saint Martin' },
            { id: 'PM', name: 'Saint Pierre And Miquelon' },
            { id: 'VC', name: 'Saint Vincent And Grenadines' },
            { id: 'WS', name: 'Samoa' },
            { id: 'SM', name: 'San Marino' },
            { id: 'ST', name: 'Sao Tome And Principe' },
            { id: 'SA', name: 'Saudi Arabia' },
            { id: 'SN', name: 'Senegal' },
            { id: 'RS', name: 'Serbia' },
            { id: 'SC', name: 'Seychelles' },
            { id: 'SL', name: 'Sierra Leone' },
            { id: 'SG', name: 'Singapore' },
            { id: 'SK', name: 'Slovakia' },
            { id: 'SI', name: 'Slovenia' },
            { id: 'SB', name: 'Solomon Islands' },
            { id: 'SO', name: 'Somalia' },
            { id: 'ZA', name: 'South Africa' },
            { id: 'GS', name: 'South Georgia And Sandwich Isl.' },
            { id: 'ES', name: 'Spain' },
            { id: 'LK', name: 'Sri Lanka' },
            { id: 'SD', name: 'Sudan' },
            { id: 'SR', name: 'Suriname' },
            { id: 'SJ', name: 'Svalbard And Jan Mayen' },
            { id: 'SZ', name: 'Swaziland' },
            { id: 'SE', name: 'Sweden' },
            { id: 'CH', name: 'Switzerland' },
            { id: 'SY', name: 'Syrian Arab Republic' },
            { id: 'TW', name: 'Taiwan' },
            { id: 'TJ', name: 'Tajikistan' },
            { id: 'TZ', name: 'Tanzania' },
            { id: 'TH', name: 'Thailand' },
            { id: 'TL', name: 'Timor-Leste' },
            { id: 'TG', name: 'Togo' },
            { id: 'TK', name: 'Tokelau' },
            { id: 'TO', name: 'Tonga' },
            { id: 'TT', name: 'Trinidad And Tobago' },
            { id: 'TN', name: 'Tunisia' },
            { id: 'TR', name: 'Turkey' },
            { id: 'TM', name: 'Turkmenistan' },
            { id: 'TC', name: 'Turks And Caicos Islands' },
            { id: 'TV', name: 'Tuvalu' },
            { id: 'UG', name: 'Uganda' },
            { id: 'UA', name: 'Ukraine' },
            { id: 'AE', name: 'United Arab Emirates' },
            { id: 'GB', name: 'United Kingdom' },
            { id: 'US', name: 'United States' },
            { id: 'UM', name: 'United States Outlying Islands' },
            { id: 'UY', name: 'Uruguay' },
            { id: 'UZ', name: 'Uzbekistan' },
            { id: 'VU', name: 'Vanuatu' },
            { id: 'VE', name: 'Venezuela' },
            { id: 'VN', name: 'Viet Nam' },
            { id: 'VG', name: 'Virgin Islands British' },
            { id: 'VI', name: 'Virgin Islands U.S.' },
            { id: 'WF', name: 'Wallis And Futuna' },
            { id: 'EH', name: 'Western Sahara' },
            { id: 'YE', name: 'Yemen' },
            { id: 'ZM', name: 'Zambia' },
            { id: 'ZW', name: 'Zimbabwe' }
        ];
    })();
    this.GAME_TYPE = new (function() {
        this.WARM_UP = 0;
        this.LIGHTNING_LAP = 1;
        this.HEAD_TO_HEAD = 2;
        this.GRAND_PRIX = 3;
        this.ZOMBIE_LAST_HOPE = 4;
        this.ZOMBIE_THE_HUNTED = 5;
        this.ZOMBIE_APOCALYPSE = 6;
        this.VIRTUAL_WORKOUT = 7;
        this.METRIC_MONITOR = 8;
        this.WORKOUT_PROGRAM = 9;
        this.ATHLETE_BATTLE = 10;
        this.KRAKEN = 11;
        this.KRAKEN_RACE = 12;
        this.KRAKEN_UNITED = 13;
        this.VIDEO = 14;
        this.STUNAMI = 15;
    })();
    this.TIME_TYPE = new (function() {
        this.ALL = 'all';
        this.DAY = 'day';
        this.WEEK = 'week';
        this.MONTH = 'month';
    })();
    this.METRIC_TYPE = new (function() {
        this.OUTPUTS = 'outputs';
        this.AVG_WATTS = 'avgWatts';
        this.CALORIES = 'calories';
        this.AVG_CALORIES = 'avgCalories';
        this.METERS = 'meters';
        this.AVG_MIN500S = 'avgMin500s';
        this.AVG_SPMS = 'avgSpms';
    })();
    this.STATUS_TYPE = new (function() {
        this.ACTIVE = 'active';
        this.WAITING = 'waiting';
        this.CANCELLED = 'cancelled';
    })();
})();

export default CONSTANTS;
