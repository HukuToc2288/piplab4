package beans;


import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;

@Getter
@Setter
@Entity
@Table(name = "CHECKDATA")
public class DataRow {

    static int staticId;

    public DataRow(){

    }

    public DataRow(float x, float y, float r){
        ID= (int) (Math.random()*1000000);
        XPARAM=x;
        YPARAM=y;
        RPARAM=r;
        RESULT=new Date();
        SHOOT = (x>0 && y>0 && x<r && y<r/2) || (x>0 && y<0 && x+y<r/2) || (x<0 && y<0 &&(x*x+y*y<r*r)) ? "+" : "-";
    }

    @Id
    @Column(unique=true)
    private int ID;
    @Column
    private float XPARAM;
    @Column
    private float YPARAM;
    @Column
    private float RPARAM;
    @Column
    private Date RESULT;
    @Column
    private String SHOOT;
}