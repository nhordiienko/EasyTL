package com.example.easytl;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;

public class LoginActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_login);

    }
    public void backBut(View view){
        Intent intent = new Intent(LoginActivity.this, EasyTL.class);
        startActivity(intent);
    }
}