package beans;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.util.Date;
import java.util.Locale;

@Getter
@Setter
@Entity
@Table(name = "ACCOUNT")
public class Account {

    public Account(){

    }

    public Account(String login, int hpsswd){
        this.LOGIN=login;
        this.HPSSWD=hpsswd;
    }

    @Id
    @Column(unique=true)
    private String LOGIN;
    @Column
    private int HPSSWD;

    @Override
    public boolean equals(Object obj) {
        Account account = (Account) obj;
        return super.equals(obj)||(account.HPSSWD==HPSSWD && account.LOGIN.equals(LOGIN));
    }
}