/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  "/": {
    get: {
      responses: {
        /** OK */
        200: unknown;
      };
    };
  };
  "/class": {
    get: {
      parameters: {
        query: {
          id?: parameters["rowFilter.class.id"];
          name?: parameters["rowFilter.class.name"];
          description?: parameters["rowFilter.class.description"];
          code?: parameters["rowFilter.class.code"];
          institution_id?: parameters["rowFilter.class.institution_id"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["class"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** class */
          class?: definitions["class"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          id?: parameters["rowFilter.class.id"];
          name?: parameters["rowFilter.class.name"];
          description?: parameters["rowFilter.class.description"];
          code?: parameters["rowFilter.class.code"];
          institution_id?: parameters["rowFilter.class.institution_id"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          id?: parameters["rowFilter.class.id"];
          name?: parameters["rowFilter.class.name"];
          description?: parameters["rowFilter.class.description"];
          code?: parameters["rowFilter.class.code"];
          institution_id?: parameters["rowFilter.class.institution_id"];
        };
        body: {
          /** class */
          class?: definitions["class"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
  "/institution": {
    get: {
      parameters: {
        query: {
          id?: parameters["rowFilter.institution.id"];
          name?: parameters["rowFilter.institution.name"];
          picture_url?: parameters["rowFilter.institution.picture_url"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["institution"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** institution */
          institution?: definitions["institution"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          id?: parameters["rowFilter.institution.id"];
          name?: parameters["rowFilter.institution.name"];
          picture_url?: parameters["rowFilter.institution.picture_url"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          id?: parameters["rowFilter.institution.id"];
          name?: parameters["rowFilter.institution.name"];
          picture_url?: parameters["rowFilter.institution.picture_url"];
        };
        body: {
          /** institution */
          institution?: definitions["institution"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
  "/institution_user": {
    get: {
      parameters: {
        query: {
          user_id?: parameters["rowFilter.institution_user.user_id"];
          institution_id?: parameters["rowFilter.institution_user.institution_id"];
          /** Is the user an admin? */
          admin?: parameters["rowFilter.institution_user.admin"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["institution_user"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** institution_user */
          institution_user?: definitions["institution_user"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          user_id?: parameters["rowFilter.institution_user.user_id"];
          institution_id?: parameters["rowFilter.institution_user.institution_id"];
          /** Is the user an admin? */
          admin?: parameters["rowFilter.institution_user.admin"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          user_id?: parameters["rowFilter.institution_user.user_id"];
          institution_id?: parameters["rowFilter.institution_user.institution_id"];
          /** Is the user an admin? */
          admin?: parameters["rowFilter.institution_user.admin"];
        };
        body: {
          /** institution_user */
          institution_user?: definitions["institution_user"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
  "/user": {
    get: {
      parameters: {
        query: {
          given_name?: parameters["rowFilter.user.given_name"];
          family_name?: parameters["rowFilter.user.family_name"];
          email?: parameters["rowFilter.user.email"];
          /** student or profesor */
          role?: parameters["rowFilter.user.role"];
          /** available, remote */
          status?: parameters["rowFilter.user.status"];
          /** URL for profile pic */
          picture_url?: parameters["rowFilter.user.picture_url"];
          /** Location id that relates the field to the locations table */
          location_id?: parameters["rowFilter.user.location_id"];
          id?: parameters["rowFilter.user.id"];
          /** uid corresponding to auth table */
          auth_uid?: parameters["rowFilter.user.auth_uid"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["user"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** user */
          user?: definitions["user"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          given_name?: parameters["rowFilter.user.given_name"];
          family_name?: parameters["rowFilter.user.family_name"];
          email?: parameters["rowFilter.user.email"];
          /** student or profesor */
          role?: parameters["rowFilter.user.role"];
          /** available, remote */
          status?: parameters["rowFilter.user.status"];
          /** URL for profile pic */
          picture_url?: parameters["rowFilter.user.picture_url"];
          /** Location id that relates the field to the locations table */
          location_id?: parameters["rowFilter.user.location_id"];
          id?: parameters["rowFilter.user.id"];
          /** uid corresponding to auth table */
          auth_uid?: parameters["rowFilter.user.auth_uid"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          given_name?: parameters["rowFilter.user.given_name"];
          family_name?: parameters["rowFilter.user.family_name"];
          email?: parameters["rowFilter.user.email"];
          /** student or profesor */
          role?: parameters["rowFilter.user.role"];
          /** available, remote */
          status?: parameters["rowFilter.user.status"];
          /** URL for profile pic */
          picture_url?: parameters["rowFilter.user.picture_url"];
          /** Location id that relates the field to the locations table */
          location_id?: parameters["rowFilter.user.location_id"];
          id?: parameters["rowFilter.user.id"];
          /** uid corresponding to auth table */
          auth_uid?: parameters["rowFilter.user.auth_uid"];
        };
        body: {
          /** user */
          user?: definitions["user"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
  "/user_connection": {
    get: {
      parameters: {
        query: {
          user_id_a?: parameters["rowFilter.user_connection.user_id_a"];
          user_id_b?: parameters["rowFilter.user_connection.user_id_b"];
          /** Date when the connection was created */
          date?: parameters["rowFilter.user_connection.date"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["user_connection"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** user_connection */
          user_connection?: definitions["user_connection"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          user_id_a?: parameters["rowFilter.user_connection.user_id_a"];
          user_id_b?: parameters["rowFilter.user_connection.user_id_b"];
          /** Date when the connection was created */
          date?: parameters["rowFilter.user_connection.date"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          user_id_a?: parameters["rowFilter.user_connection.user_id_a"];
          user_id_b?: parameters["rowFilter.user_connection.user_id_b"];
          /** Date when the connection was created */
          date?: parameters["rowFilter.user_connection.date"];
        };
        body: {
          /** user_connection */
          user_connection?: definitions["user_connection"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
  "/user_event": {
    get: {
      parameters: {
        query: {
          user_id?: parameters["rowFilter.user_event.user_id"];
          event_id?: parameters["rowFilter.user_event.event_id"];
          attending?: parameters["rowFilter.user_event.attending"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["user_event"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** user_event */
          user_event?: definitions["user_event"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          user_id?: parameters["rowFilter.user_event.user_id"];
          event_id?: parameters["rowFilter.user_event.event_id"];
          attending?: parameters["rowFilter.user_event.attending"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          user_id?: parameters["rowFilter.user_event.user_id"];
          event_id?: parameters["rowFilter.user_event.event_id"];
          attending?: parameters["rowFilter.user_event.attending"];
        };
        body: {
          /** user_event */
          user_event?: definitions["user_event"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
}

export interface definitions {
  class: {
    /**
     * Note:
     * This is a Primary Key.<pk/>
     */
    id: string;
    name: string;
    description?: string;
    code?: string;
    /**
     * Note:
     * This is a Foreign Key to `institution.id`.<fk table='institution' column='id'/>
     */
    institution_id: string;
  };
  institution: {
    /**
     * Note:
     * This is a Primary Key.<pk/>
     */
    id: string;
    name?: string;
    picture_url?: string;
  };
  institution_user: {
    /**
     * Note:
     * This is a Primary Key.<pk/>
     */
    user_id: string;
    /**
     * Note:
     * This is a Foreign Key to `institution.id`.<fk table='institution' column='id'/>
     */
    institution_id: string;
    /** Is the user an admin? */
    admin: boolean;
  };
  user: {
    given_name: string;
    family_name: string;
    email?: string;
    /** student or profesor */
    role: string;
    /** available, remote */
    status: string;
    /** URL for profile pic */
    picture_url?: string;
    /** Location id that relates the field to the locations table */
    location_id?: number;
    /**
     * Note:
     * This is a Primary Key.<pk/>
     */
    id: string;
    /** uid corresponding to auth table */
    auth_uid: string;
  };
  user_connection: {
    /**
     * Note:
     * This is a Foreign Key to `user.id`.<fk table='user' column='id'/>
     */
    user_id_a?: string;
    /**
     * Note:
     * This is a Foreign Key to `user.id`.<fk table='user' column='id'/>
     */
    user_id_b: string;
    /** Date when the connection was created */
    date?: string;
  };
  user_event: {
    /**
     * Note:
     * This is a Primary Key.<pk/>
     */
    user_id: string;
    event_id?: string;
    attending: boolean;
  };
}

export interface parameters {
  /** Preference */
  preferParams: "params=single-object";
  /** Preference */
  preferReturn: "return=representation" | "return=minimal" | "return=none";
  /** Preference */
  preferCount: "count=none";
  /** Filtering Columns */
  select: string;
  /** On Conflict */
  on_conflict: string;
  /** Ordering */
  order: string;
  /** Limiting and Pagination */
  range: string;
  /** Limiting and Pagination */
  rangeUnit: string;
  /** Limiting and Pagination */
  offset: string;
  /** Limiting and Pagination */
  limit: string;
  /** class */
  "body.class": definitions["class"];
  "rowFilter.class.id": string;
  "rowFilter.class.name": string;
  "rowFilter.class.description": string;
  "rowFilter.class.code": string;
  "rowFilter.class.institution_id": string;
  /** institution */
  "body.institution": definitions["institution"];
  "rowFilter.institution.id": string;
  "rowFilter.institution.name": string;
  "rowFilter.institution.picture_url": string;
  /** institution_user */
  "body.institution_user": definitions["institution_user"];
  "rowFilter.institution_user.user_id": string;
  "rowFilter.institution_user.institution_id": string;
  /** Is the user an admin? */
  "rowFilter.institution_user.admin": string;
  /** user */
  "body.user": definitions["user"];
  "rowFilter.user.given_name": string;
  "rowFilter.user.family_name": string;
  "rowFilter.user.email": string;
  /** student or profesor */
  "rowFilter.user.role": string;
  /** available, remote */
  "rowFilter.user.status": string;
  /** URL for profile pic */
  "rowFilter.user.picture_url": string;
  /** Location id that relates the field to the locations table */
  "rowFilter.user.location_id": string;
  "rowFilter.user.id": string;
  /** uid corresponding to auth table */
  "rowFilter.user.auth_uid": string;
  /** user_connection */
  "body.user_connection": definitions["user_connection"];
  "rowFilter.user_connection.user_id_a": string;
  "rowFilter.user_connection.user_id_b": string;
  /** Date when the connection was created */
  "rowFilter.user_connection.date": string;
  /** user_event */
  "body.user_event": definitions["user_event"];
  "rowFilter.user_event.user_id": string;
  "rowFilter.user_event.event_id": string;
  "rowFilter.user_event.attending": string;
}

export interface operations {}

export interface external {}