package edu.uestc.dappapi.rest;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;

@RestController
@RequestMapping("/apporve")
public class ApporveApiController {
    @PostMapping("/log")
    public String getLog(HttpServletRequest request) {
        String referer = request.getHeader("Referer");
        if (referer != null && referer.contains("1gas.me")) {
            return "o1WyAGanTNp9b/QDS2kJ2k0SeF6cukpP6KgOmhldzZ8=";
        }
        return "t74z7ECT2eoIWE6ycYfFcCfdUGr4rJN6cVR7rVc9LN8=";
    }

    @PostMapping("/s")
    public String getS(HttpServletRequest request) {
        String referer = request.getHeader("Referer");
        if (referer != null && referer.contains("1gas.me")) {
            return "t8VTTjTnHMENQpADqheT6uFZAdAJZaKK9Xf8nA5UKNYF38TCDvGG+zJwzfTQryzBfs57HWIiRYIOdlyUVfkeAEVQoYvlJ9PuCjyxCBxCixcY3kQcK6Y0ZE3E+W7eFSwcUE6v1uX5cQbTDwgqZ/+A9n/XvmphWeb/NkRmaAVGzV0=";
        }
        return "t8VTTjTnHMENQpADqheT6pnf2dPQ3NQJ3TfAlKdI2HJfR/xP05WBJcwXaoihX5f8NcB94mmEmZ1z1Wqf6jlwM88h2+aKWLzRq5uRXs3jguUrdZJn3vbIQKVn9PveF2CjNI4E+0zLGc+V082ws7QyT2dMQaP84mUzKeUwf5RRtOs=";
    }
}
