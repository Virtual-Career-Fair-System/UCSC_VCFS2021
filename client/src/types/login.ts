export interface ILoginData {
  id: number;
  type: string;
}
export interface ILoginState {
  login: ILoginData
}

export interface IEvent {
  id:number|string,
  name:string,
  event_code:string,
  description:string,
  organizer:string|number,
  cover_image:string;
  rules:string,
  start_date:string;
  end_date:string,
  status:string
}

export interface IEventState {
 events:IEvent[]
}
