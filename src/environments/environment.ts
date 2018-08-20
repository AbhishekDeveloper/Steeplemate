export const environment = {
  production: null,
  siteDescription: "Steeple-Map....",
  siteTitle: "Welcome to Steeple-Map",
  siteApiUrl: null,
  siteUrl: null,
  site: {
    get url() {
      return environment.siteUrl;
    },
    get api() {
      return environment.siteApiUrl;
    },
    get searchPeople()
    {
      return `${environment.siteApiUrl}/SearchPeople/?firstName=''&lastName=''&includeInactivePeople=false&organizationKey=''`;
    }
  }
};

