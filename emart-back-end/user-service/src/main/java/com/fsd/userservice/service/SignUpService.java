package com.fsd.userservice.service;

public interface SignUpService<T> {

    T signUp(T user);

    T find(T user);
}
