文字列の左側を、指定した文字で指定した長さ分埋めます。 この機能は、数値文字列や日付文字列の正規化に役立ちます。 使用例:

    var s = Ext.String.leftPad('123', 5, '0');
    // 変数sに含まれる文字列: '00123'