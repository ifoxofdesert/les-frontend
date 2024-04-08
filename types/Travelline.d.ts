export interface IwindowTravelline extends Window {
  TL: {
    integration: object;
    loader: object;
    version: string;
  };
  travelline: {
    integration: {
      clearCache: string;
      embed: string;
      loaded: boolean;
      __cq: {
        concat: Function;
        push: Function;
      };
      __lastTrackerId: number;
      __loader: boolean;
      __trackerSessionId: string;
      __trackerUserId: string;
    };

    loader: object;

    version: string;

    __loader: boolean;
  };
}
