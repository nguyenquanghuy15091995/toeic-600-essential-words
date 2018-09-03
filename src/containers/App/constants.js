
/**
 * Router url.
 */
export const ROUTER_URL = {
  // General businnes
  CONTRACT: '/contracts',
  MARKETING: '/marketing',
  WARRANTIES: '/warranties',
  BUSINESS_PLANNING: '/business-planning',
  CONFERENCES: '/conferences',
  // Office issues
  COMPUTERS: '/computers',
  OFFICE_TECHNOLOGY: '/office-technology',
  OFFICE_PROCEDURES: '/office-procedures',
  ELECTRONICS: '/electronics',
  CORRESPONDENCE: '/Correspondence',
  // Personnel
  JOB_ADS_AND_RECRUITING: '/job-ads-and-recruiting',
  APPLYING_AND_INTERVIEWING: '/applying-and-interviewing',
  HIRING_AND_TRAINING: '/hiring-and-training',
  SALARIES_AND_BENEFITS: '/salaries-and-benefits',
  PROMOTIONS_PENSIONS_AND_AWARDS: '/promotion-pensions-and-awards',
  // Purchasing
  SHOPPING: '/shopping',
  ORDERING_SUPPLIES: '/ordering-supplies',
  SHIPPING: '/shipping',
  INVOICES: '/invoices',
  INVENTORY: '/inventory',
  // Financing and budgeting
  BANKING: '/banking',
  ACCOUNTING: '/accounting',
  INVESTMENTS: '/investments',
  TAXES: '/taxes',
  FINANCIAL_STATEMENTS: '/financial-statements',
  // Management Issues
  PROPERTY_AND_DEPARTMENTS: '/property-and-departments',
  BOARD_MEETINGS_AND_COMMITTEES: '/board-mettings-and-committees',
  QUALITY_CONTROL: '/quality-control',
  PRODUCT_DEVELOPMENT: '/product-development',
  RENTING_AND_LEASING: '/renting-and-leasing',
  // Restaurants and Events
  SELECTING_A_RESTAURANT: '/selecting-a-restaurant',
  EATING_OUT: '/eating-out',
  ORDERING_LUNCH: '/ordering-lunch',
  COOKING_AS_A_CAREER: '/cooking-as-a-career',
  EVENTS: '/events',
  // Travel
  GENERAL_TRAVEL: '/general-travel',
  AIRLINES: '/airlines',
  TRAINS: '/trains',
  HOTELS: '/hotels',
  CAR_RENTALS: '/car-rentals',
  // Entertainment
  MOVIES: '/movies',
  THEATER: '/theater',
  MUSIC: '/music',
  MUSEUMS: '/museums',
  MEDIA: '/media',
  // Health
  DOCTOR_OFFICE: '/doctor-office',
  DENTIST_OFFICE: '/dentist-office',
  HEALTH_INSURANCE: '/health-insurance',
  HOSPITALS: '/hospitals',
  PHARMACY: '/pharmacy',
};

/**
 * Topic type.
 */
const OBJ_GENERAL_BUSINESS = { label: 'General Business', value: 'GENERAL_BUSINESS' };
const OBJ_OFFICE_ISSUES = { label: 'Office Issues', value: 'OFFICE_ISSUES' };
const OBJ_PERSONNEL = { label: 'Personnel', value: 'PERSONNEL' };
const OBJ_PURCHASING= { label: 'Puchasing', value: 'PURCHASING' };
const OBJ_FINANCING_AND_BUDGETING = { label: 'Financing and Budgeting', value: 'FINANCING_AND_BUDGETING' };
const OBJ_MANAGEMENT_ISSUES = { label: 'Management Issues', value: 'MANAGEMENT_ISSUES' };
const OBJ_RESTAURANTS_AND_EVENTS = { label: 'Restaurants and Events', value: 'RESTAURANTS_AND_EVENTS' };
const OBJ_TRAVEL = { label: 'Travel', value: 'TRAVEL' };
const OBJ_ENTERTAINMENT = { label: 'Entertainment', value: 'ENTERTAINMENT' };
const OBJ_HEALTH = { label: 'Health', value: 'HEALTH' };
export const TOPIC_CLASSIFICATIONS = {
  GENERAL_BUSINESS: OBJ_GENERAL_BUSINESS,
  OFFICE_ISSUES: OBJ_OFFICE_ISSUES,
  PERSONNEL: OBJ_PERSONNEL,
  PURCHASING: OBJ_PURCHASING,
  FINANCING_AND_BUDGETING: OBJ_FINANCING_AND_BUDGETING,
  MANAGEMENT_ISSUES: OBJ_MANAGEMENT_ISSUES,
  RESTAURANTS_AND_EVENTS: OBJ_RESTAURANTS_AND_EVENTS,
  TRAVEL: OBJ_TRAVEL,
  ENTERTAINMENT: OBJ_ENTERTAINMENT,
  HEALTH: OBJ_HEALTH,
  ALL: [
    OBJ_GENERAL_BUSINESS,
    OBJ_OFFICE_ISSUES,
    OBJ_PERSONNEL,
    OBJ_PURCHASING,
    OBJ_FINANCING_AND_BUDGETING,
    OBJ_MANAGEMENT_ISSUES,
    OBJ_RESTAURANTS_AND_EVENTS,
    OBJ_TRAVEL,
    OBJ_ENTERTAINMENT,
    OBJ_HEALTH,
  ],
};
