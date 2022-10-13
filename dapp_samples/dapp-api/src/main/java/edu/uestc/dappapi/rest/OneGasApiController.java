package edu.uestc.dappapi.rest;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/1gasme")
public class OneGasApiController {

    @PostMapping("/log")
    public String getLog() { return "o1WyAGanTNp9b/QDS2kJ2k0SeF6cukpP6KgOmhldzZ8="; }

    @PostMapping("/s")
    public String getS() {
        return "t8VTTjTnHMENQpADqheT6uFZAdAJZaKK9Xf8nA5UKNYF38TCDvGG+zJwzfTQryzBfs57HWIiRYIOdlyUVfkeAEVQoYvlJ9PuCjyxCBxCixcY3kQcK6Y0ZE3E+W7eFSwcUE6v1uX5cQbTDwgqZ/+A9n/XvmphWeb/NkRmaAVGzV0=";
    }
}
