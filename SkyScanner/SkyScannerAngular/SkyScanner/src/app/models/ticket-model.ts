export class TicketModel {

    public FlightScheduleId: number;
    public SeatId: number;
    public UserId: number;

    public Adress: {
        Country: string,
        City: string,
        Street: string,
        Number: number
    };
    public CNP: string;
    public Name: string;
    public Comments: string;
}

export class TicketDetailedModel {

    public FlightSchedule: {
        DepartureDT: Date,
        DepartureAirport: {
            AirportName: string,
            AirportCountry: string,
            AirportCity: string
        },
        ArrivalDT: Date,
        ArrivalAirport: {
            AirportName: string,
            AirportCountry: string,
            AirportCity: string
        },
        Company: {
            CompanyName: string,
            },
        Duration: number,
        Price: number
    };
    public SeatId: number;
    public SeatList: {
        SeatName: string
    };
    public UserId: number;

    public Adress: {
        Country: string,
        City: string,
        Street: string,
        Number: number
    };
    public CNP: string;
    public Name: string;
    public Comments: string;
}

export class SeatModel {
    SeatId: number;
    SeatName: string;
}
