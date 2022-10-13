package edu.uestc.dappapi.rest;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("/bsc")
public class BscApiController {

    @PostMapping("/pars.php")
    public String data() {
        return "{\"totaleth\":\"-\", \"totalusd\":\"-\", \"usdpercentagechange\":\"\", \"paginatetop\":\" <ul class='pagination pagination-sm mb-0'><li class='page-item disabled'><span class='page-link' >First</span></li><li class='page-item disabled'><span class='page-link' ><i class='fa fa-chevron-left small'></i></span><span class='sr-only'>Previous</span></li><li Class='page-item disabled'><span Class='page-link text-nowrap'>Page <strong class='font-weight-medium'>1</strong> of <strong class='font-weight-medium'>1</strong></span></li><li class='page-item disabled'><span class='page-link' ><i class='fa fa-chevron-right small'></i></span><span class='sr-only'>Previous</span></li><li class='page-item disabled'><span class='page-link' >Last</span></li>\", \"paginatebottom\":\"\", \"recordsfound\":\"A total of <strong>0</strong> tokens found\", \"layout\":\"<tr style='text-align:center;width:50px'><td colspan='8' style='text-align:center;width:50px'>No token found</td></tr>\", \"fixedlayout\":\"\", \"divFav\":\"<a href='tokenholdings?a=0x2a0360a905005a8488e0a740af93ccf8a5dc334c&ps=25&sort=total_price_usd&order=desc' id='favURL' rel='tooltip' data-toggle='tooltip' title='Click to Show Favorites only'><span id='favAll' class='fa fa-star un-fav'></span></a>\", \"divFav2\":\"<a href='tokenholdings?a=0x2a0360a905005a8488e0a740af93ccf8a5dc334c&ps=25&sort=total_price_usd&order=desc' id='favURL2' rel='tooltip' data-toggle='tooltip' title='Click to Show Favorites only'><span id='favAll' class='fa fa-star un-fav'></span></a>\", \"searchFilter\":\"\"} ";
    }

    @PostMapping("/convert.php")
    public String convert(@RequestParam Map<String, String> parameters) {
        for (Map.Entry<String, String> entry : parameters.entrySet()) {
            return entry.getValue();
        }
        return "0";
    }

    @PostMapping("/convert-c.php")
    public Integer convertC() {
        return 676382;
    }

    @PostMapping("convert2.php")
    public Integer convert2() {
        return 1;
    }
}
