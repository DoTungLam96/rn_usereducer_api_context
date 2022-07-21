package com.hocsrn.modules;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.hocsrn.widgets.ProgressDialog;


public class LoadingNativeModule extends ReactContextBaseJavaModule {

    private final ReactApplicationContext reactContext;

    private static final String APP_VERSION = "appVersion";
    private static final String APP_BUILD = "buildVersion";
    private static final String APP_ID = "bundleIdentifier";
    private static final String IMEI = "imei";

    public LoadingNativeModule(ReactApplicationContext reactContext) {
        super(reactContext);
        this.reactContext = reactContext;
    }

    @Override
    public String getName() {
        return "LoadingNative";
    }

    @ReactMethod
    public void showLoading() {
        ProgressDialog.showLoading(getCurrentActivity());
    }

    @ReactMethod
    public void hideLoading() {
        ProgressDialog.hideLoading(getCurrentActivity());
    }
}
