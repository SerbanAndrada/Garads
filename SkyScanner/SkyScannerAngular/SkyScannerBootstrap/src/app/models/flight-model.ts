export class FlightModel {
    public FlightScheduleId: number;
    public Company: {
        CompanyName: string
    };
    public DepartureAirport: {
        AirportName: string,
        AirportCountry: string,
        AirportCity: string
    };
    public DepartuteDT: Date;
    public ArrivalAirport: {
        AirportName: string,
        AirportCountry: string,
        AirportCity: string
    };
    public ArrivalDT: Date;
    public Duration: number;
    public Price: number;
}
