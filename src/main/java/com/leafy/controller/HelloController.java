package com.leafy.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class HelloController {

    @GetMapping("/")
    @ResponseBody
    public String hello() {
        return """
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Leafy</title>
                    <style>
                        body {
                            font-family: system-ui, -apple-system, sans-serif;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            min-height: 100vh;
                            margin: 0;
                            background: linear-gradient(135deg, #e8f5e9, #c8e6c9);
                            color: #2e7d32;
                        }
                        h1 {
                            font-size: 3rem;
                            text-shadow: 1px 1px 2px rgba(0,0,0,0.1);
                        }
                    </style>
                </head>
                <body>
                    <h1>Hello, world!</h1>
                </body>
                </html>
                """;
    }
}
