import {AccessService} from "./access.service";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {User} from "../../models/user";

describe("Testing AccessService", () => {
  let service: AccessService;

  let mockHttpClient = {
    post: () => {}
  };

  let mockRouter = {};

  beforeEach(() => {
    service = new AccessService(mockHttpClient as unknown as HttpClient, mockRouter as Router);
  });

  it("should set token", () => {
    const mockToken = "xxx.tokendata.yyy";

    service.setToken(mockToken);

    expect(service.token).toBe(mockToken);
  });

  it("should delete token", () => {
    const mockToken = "mock-token";

    service.setToken(mockToken);

    expect(service.token).toBe(mockToken);

    service.setToken(undefined);

    // Asserts
    expect(service.token).toBeUndefined();
    expect(service.token).toBe(undefined);
    expect(service.token).toBeFalsy();
    expect(service.token).not.toBeTruthy();

    expect(service.isLoggedIn).toBeFalse();
  });

  it("should call http post method to register a user", () => {
    const spy = spyOn(mockHttpClient, "post");

    const mockUserDetails: User = {
      username: "mock-user-name",
      password: "mock-user-password******"
    };

    service.registerUser(mockUserDetails);

    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledTimes(1);

    expect(spy.calls.mostRecent().args).toEqual([jasmine.anything(), mockUserDetails as any]);
  });
});
