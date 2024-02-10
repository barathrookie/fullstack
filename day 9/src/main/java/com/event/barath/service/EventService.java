package com.event.barath.service;



import com.event.barath.dto.request.EventRequest;
import com.event.barath.dto.response.BasicResponse;
import com.event.barath.dto.response.EventResponse;

public interface EventService {

    EventResponse resgisterevent(EventRequest request);
    
    BasicResponse<EventResponse> getAllEvents();

    EventResponse getEventById(String id);

    

    

    EventResponse updateEvent(String eventId, EventRequest eventRequest);



    BasicResponse<EventResponse> deleteEvent(String eventId);
    

    
    
}
