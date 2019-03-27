package pack;

import beans.Account;
import beans.DataRow;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import repository.AccountRepository;
import repository.DataRowRepository;

import java.util.Iterator;

@RestController
public class DotsController {

    final DataRowRepository dataRowRepository;

    @Autowired
    public DotsController(DataRowRepository dataRowRepository) {
        this.dataRowRepository = dataRowRepository;
    }

    @RequestMapping(value = "/getDots", method= RequestMethod.GET)
    public String getDots() {
        Iterator data = dataRowRepository.findAll().iterator();
        String result = "";
        while (data.hasNext()) {
            DataRow dataRow = (DataRow) data.next();
            result+=dataRow.getXPARAM()+"&"+dataRow.getYPARAM()+"&"+dataRow.getRPARAM()+"&"+dataRow.getRESULT().toString()+"&   "+dataRow.getSHOOT()+";";
        }
            result=result.substring(0,result.length()-1);
        return result;
    }

    @RequestMapping(value = "/add", method= RequestMethod.GET)
    public String addDot(@RequestParam("xValueInput") float x, @RequestParam("yValueInput") float y,@RequestParam("rValueInput") float r) {
        DataRow dataRow = new DataRow(x,y,r);
        dataRowRepository.saveAndFlush(dataRow);
        return "ok";
    }
}
