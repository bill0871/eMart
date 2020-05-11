package com.fsd.userservice.entity;

import java.io.Serializable;
import java.util.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import lombok.Data;

@Data
@Entity
public class Seller implements Serializable {

    private static final long serialVersionUID = 897924047391610080L;

    @Id
    @GeneratedValue
    @Column(insertable = false)
    private Integer id;

    private String username;

    private String password;

    private String companyName;

    private String gstin;

    private String briefCompany;

    private String postalAddress;

    private String website;

    private String email;

    private Date createTime;

}