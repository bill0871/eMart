package com.fsd.userservice.entity;

import java.io.Serializable;
import java.util.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import lombok.Data;
import org.springframework.data.annotation.CreatedDate;


@Data
@Entity
public class Buyer implements Serializable {

    private static final long serialVersionUID = -40336803461258366L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", insertable = false)
    private Integer id;

    @Column(unique = true)
    private String username;

    private String password;

    private String email;

    private String mobile;

    @CreatedDate
    private Date createTime;
}