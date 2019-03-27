package pack;

import beans.Account;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import repository.AccountRepository;
import repository.DataRowRepository;

import javax.servlet.http.HttpSession;

@Controller
public class LoginController {

    @RequestMapping(value = "/", method= RequestMethod.GET)
    public String doGet() {
        return "indexPage.html";
    }

    @RequestMapping(value = "/login", method= RequestMethod.POST)
    public String login(@RequestParam("login") String login, @RequestParam("psswd") String psswd, HttpSession session) {
        if(1==1){
            session.setAttribute("authorized","+");
            return "redirect:/main";
        }
        Account account = new Account(login, psswd.hashCode());
        for (Account account1: accountRepository.findAll()){
            if(account.equals(account1)) {
                session.setAttribute("authorized","+");
                return "redirect:/main";
            }
        }
        //Аккаунта не существует
        return "fail";
    }
    private final AccountRepository accountRepository;

    @Autowired
    public LoginController(AccountRepository accountRepository) {
        this.accountRepository = accountRepository;
    }

}