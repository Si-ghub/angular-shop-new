import {AccessService} from "./access/access.service";
import {HttpClient} from "@angular/common/http";
import anything = jasmine.anything;

describe("AccessService", () => {
  let service: AccessService;
  let mockHttpService = {};

  let mockService = jasmine.createSpyObj<HttpClient>('HttpClient', ["post"]);

  beforeEach(() => {
    service = new AccessService(mockService as HttpClient, undefined as any);
  });

  it("Should return token", () => {
    service.setToken("Token");

    expect(service.token).toBe("Token");
  });

  it("Should login", () => {
    service.login({username: "test", password: "test"});

    expect(mockService.post.calls.mostRecent().args).toEqual([anything(), {username: "test", password: "test"}]);

    // expect(mockService.post.calls.count()).toBe(1);
  });
});
