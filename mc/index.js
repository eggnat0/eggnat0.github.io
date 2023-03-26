const d = (s) => {
    return atob(s).slice(1,)
};

const SZ = {

    AC: JSON.parse(d("JHsiYXV0aENvZGUiOiIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMCIsImF1dGhDb2RlVHlwZSI6MywiYm90Q291bnQiOjk5OTk5LCJicmFpbkNvdW50Ijo5OTk5OSwiY29tbWFuZGVyQ291bnQiOjk5OTk5LCJlZmZlY3RpdmVFbmRUaW1lIjoiMjA5Ny0xMi0zMSIsImVmZmVjdGl2ZVN0YXJ0VGltZSI6IjIwMjItMTItMzEiLCJmYWN0b3J5Q29tbXVuaXR5Ijo5OTk5OSwiZmFjdG9yeUNvdW50Ijo5OTk5OSwibW9iaWxlQm90Q291bnQiOjk5OTk5LCJvcmdVaWQiOiIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMCIsInBob25lIjoiMTMzMzMzMzMzMzMiLCJzZXJ2aWNlT3JnVXNlcklkU3RyIjoiMTExMTEiLCJ0ZW5hbnRJZCI6IjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwIiwidXNlck5hbWUiOiIxMzMzMzMzMzMzMyJ9")),
    info: JSON.parse(d("JHsiYWN0aXZlQ29kZSI6IjAwMDAwLTAwMDAwLTAwMDAwLUZGRURGLUM4MUU3IiwiYXV0aENvZGVUeXBlIjozLCJlZmZlY3RpdmVFbmRUaW1lIjoiMjA5Ny0xMi0zMSIsImVmZmVjdGl2ZVN0YXJ0VGltZSI6IjIwMjItMTItMzEiLCJlbmNvZGVBdXRoQ29kZSI6IiIsIm1hYyI6IiIsInByb2R1Y3RUeXBlIjoyLCJ0ZW5hbnRJZCI6IjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwIn0=")),
    data: {},

    m_m5() {
        return this.m5(this.info[d("JG1hYw==")]).toUpperCase().slice(0, 5);
    },

    get mc() {
        return this.info[d("JG1hYw==")];
    },

    set mc(value) {
        this.info[d("JG1hYw==")] = value;
    },

    d_m5() {
        return this.hx(parseInt(this.info[d("JGVmZmVjdGl2ZUVuZFRpbWU=")].replaceAll("-", ""))).slice(4).toUpperCase();
    },

    t_m5(t) {
        return this.m5(String(t)).toUpperCase().slice(0, 5);
    },

    get a_b() {
        return `00000-00000-${this.m_m5()}-${this.d_m5()}-${this.t_m5(1)}`;
    },

    get a_c() {
        return `00000-00000-${this.m_m5()}-${this.d_m5()}-${this.t_m5(2)}`;
    },

    get a_f() {
        return `00000-00000-${this.m_m5()}-${this.d_m5()}-${this.t_m5(3)}`;
    },

    get a_f_e() {
        return `00000-00000-${this.m_m5()}-${this.d_m5()}-${this.t_m5(4)}`;
    },

    get a_c_info() {
        this.info[d("JGFjdGl2ZUNvZGU=")] = this.a_c;
        this.info[d("JGVuY29kZUF1dGhDb2Rl")] = this.e_d(this.AC);
        return this.e_d(this.info);
    },

    decode(code) {
        const info = JSON.parse(this.decrypt(code));
        info[d("JGVuY29kZUF1dGhDb2Rl")] = JSON.parse(this.decrypt(info["JGVuY29kZUF1dGhDb2Rl"]));
    },

    run() {
        this.data["bot"] = this.a_b;
        this.data["factory"] = this.a_f;
        this.data["factory_enterprise"] = this.a_f_e;
        this.data["commander"] = this.a_c_info;
        console.log(this.data);
    },

    e_d(info) {
        return this.encrypt(JSON.stringify(info, null, "")).toUpperCase();
    },
    hx(decimal) {
        return "0x" + decimal.toString(16).padStart(2, "0");
    },
    m5(s) {
        return CryptoJS.MD5(s).toString();
    },
    a_e_e(key, value) {
        const keyHex = CryptoJS.enc.Hex.parse(key);
        const iv = CryptoJS.enc.Hex.parse("00000000000000000000000000000000");
        const encrypted = CryptoJS.AES.encrypt(value, keyHex, {
            iv: iv,
            mode: CryptoJS.mode.ECB,
            padding: CryptoJS.pad.Pkcs7,
        });
        return encrypted.ciphertext.toString().toUpperCase();
    },
    a_e_d(key, value) {
        
        const keyHex = CryptoJS.enc.Hex.parse(key);
        const iv = CryptoJS.enc.Hex.parse("00000000000000000000000000000000");
        const decrypted = CryptoJS.AES.decrypt({
            ciphertext: CryptoJS.enc.Hex.parse(value)
        },
            keyHex, {
            iv: iv,
            mode: CryptoJS.mode.ECB,
            padding: CryptoJS.pad.Pkcs7,
        }
        );
        return decrypted.toString(CryptoJS.enc.Utf8);
    },
    g_s_k(key) {
        const signature = CryptoJS.SHA1(key);
        const shaSignature = CryptoJS.SHA1(signature).toString().toUpperCase();
        
        return shaSignature.substring(0, 32);
    },

    decrypt(content) {
        const key = d("JF4mXiQlQQ==");
        return this.a_e_d(this.g_s_k(key), content);
    },
    encrypt(content) {
        const key = d("JF4mXiQlQQ==");
        return this.a_e_e(this.g_s_k(key), content);
    }
};

function get_mc() {
    const mc_el = document.getElementById("input");
    var mc = mc_el.value;
    if (!mc) {
        mc = mc_el.placeholder;
    }
    var r = mc.match(d("JG1hYz0oLio/KSY="));
    if (r) {
        mc = r[1];
    }
    return mc;
}

function caculate(mc) {
    SZ.mc = mc;
    SZ.run();
    return SZ.data;
}

function showCode(code) {
    const value = JSON.stringify(code, null, 2);
    const output = document.getElementById("output");
    output.value = value;
}

function run() {
    var mc = get_mc();
    var code = caculate(mc);
    showCode(code);
}
