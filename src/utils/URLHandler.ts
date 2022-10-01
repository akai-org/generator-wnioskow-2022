export class URLHandler {
  static baseApiUrl = 'https://api.wnioski.akai.org.pl/api/v1';

  static getClubsUrl = `${URLHandler.baseApiUrl}/lists/clubs`;

  static getDepartmentsUrl = `${URLHandler.baseApiUrl}/lists/departments`;
}
